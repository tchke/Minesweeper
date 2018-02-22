import React from 'react';

export default class Repeat extends React.Component {
    render() {
        const items = [];
        const { times = 10 } = this.props;

        for (let i = 0; i < times; i++) {
            items.push(this.props.children(i));
        }
        
        return items;
    }
}