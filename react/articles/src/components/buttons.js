import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class Buttons extends Component {
    render() {
        return (
            <div className="clearfix text-right">
                <Button
                    color="primary"
                    onClick={() => { this.props.onBttnEditClicked(this.props.id) }}
                >Edit</Button>
                {' '}
                <Button
                    color="danger"
                    onClick={() => { this.props.onBttnDeleteClicked(this.props.id) }}
                >Delete</Button>
            </div>
        );
    }
}
