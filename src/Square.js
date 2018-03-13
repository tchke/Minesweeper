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
        const { has, renderRevealed, count } = this.props;
        const name = has ? 'red' : 'grey';
        const { exposed } = this.state;
        const isRevealed = exposed || renderRevealed;
        const className = classNames('square', { [`${name}`]: isRevealed })
        return (
            <button className={className} onClick={this.handleClick}>
                { isRevealed && count }
            </button>
        );
    }
}
