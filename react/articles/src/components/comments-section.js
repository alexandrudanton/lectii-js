import React, { Component } from 'react';
import { Button, Collapse} from 'reactstrap';
import Comments from './comments';

export default class CommentsSection extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false
        }
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <div>
                <Button
                    color="link"
                    onClick={this.toggle}
                >{this.state.collapse ? 'hide' : 'show'} comments</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Comments comments={this.props.comments} />
                </Collapse>
            </div>
        )
    }
}
