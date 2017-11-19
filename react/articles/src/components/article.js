import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentsSection from './comments-section';
import Buttons from './buttons';
import { root } from '../config/config';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    componentWillMount() {
        axios
            .get(root + '/comments?postId=' + this.props.id)
            .then((comments) => {
                this.setState({
                    comments: comments.data
                })
            })
    }

    render() {
        return (
            <div className="card-container">
                <Card>
                    <CardBody>
                        <CardTitle className="text-success">{this.props.title}</CardTitle>
                        <CardText>{this.props.body}</CardText>
                        <CommentsSection comments={this.state.comments} />
                       <Buttons {...this.props} />
                    </CardBody>
                </Card>
            </div>
        )
    }
}
