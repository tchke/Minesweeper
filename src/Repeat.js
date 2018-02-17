import React from 'react';

export default class Repeat extends React.Component {
    render() {
        const items = [];

        for (let i = 0; i < 10; i++) {
            items.push(this.props.children(i));
        }
        
        return items;
    }
}