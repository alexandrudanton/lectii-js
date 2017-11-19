import React, { Component } from 'react';
import Comment from './comment';
import { ListGroup } from 'reactstrap';

export default class Comments extends Component {
    render() {
        return this.props.comments
            ? this.props.comments.map((comment, index) => {
                return <ListGroup key={index} style={{marginBottom: '10px'}}>
                            <Comment
                                comment={comment}
                            />
                        </ListGroup>
            })
            : '';
    }
}
