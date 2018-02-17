import React, { Component } from 'react';
import classNames from 'classnames';
import isFunction from 'lodash.isfunction';

export default class Square extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    handleClick = (e) => {
        const { onClick, has } = this.props;
        this.setState({exposed: true});
        isFunction(onClick) && onClick(has);
    }

    render() {
        const { has } = this.props;
        const name = has ? 'red' : 'grey';
        const { exposed } = this.state;
        const className = classNames('square', { [`${name}`]: exposed })
        return (
            <button className={className} onClick={this.handleClick}>
                {/* TODO */}
            </button>
        );
    }
}
