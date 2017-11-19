import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

export default class Comment extends Component {
    render() {
        return (
            <ListGroupItem>
                <p><small>{this.props.comment.body}</small></p>
                <footer className="blockquote-footer text-right">{this.props.comment.name} ({this.props.comment.email})</footer>
            </ListGroupItem>
        )
    }
}
