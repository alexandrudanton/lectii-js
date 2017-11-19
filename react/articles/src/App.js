import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Article from './components/article';
import { ToastContainer, toast } from 'react-toastify';

import { root } from './config/config';


class App extends Component {
    constructor(props) {
        super(props);
        this.onBttnEditClicked = this.onBttnEditClicked.bind(this);
        this.onBttnDeleteClicked = this.onBttnDeleteClicked.bind(this);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        axios
            .get(root + '/posts')
            .then((posts) => {
                this.setState({
                    posts: posts.data
                });
            });
    }

    onBttnEditClicked(id) {
        this.notify('Edit article #' + id);
    }

    onBttnDeleteClicked(id) {
        this.notify('Delete article #' + id);
    }

    notify = (message) => toast.success(message);

    render() {
        return (
            <div className="App-article">
                {this.state.posts.map((post, index) => {
                    return <Article
                                key={index}
                                {...post}
                                onBttnEditClicked={this.onBttnEditClicked}
                                onBttnDeleteClicked={this.onBttnDeleteClicked}
                            />
                })}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
            </div>
        );
    }
}

export default App;
