import React, { Component } from 'react';
import Square from './Square';
import Repeat from './Repeat';
import isFunction from 'lodash.isfunction';

export default class Board extends Component {
    render() {
        return (
            <div>
                <Repeat>
                    {
                        (i) => { 
                            return (
                                <div className="board-row" key={i}>
                                    <Repeat>
                                        { (i) => this.renderSquare(i, true) }
                                    </Repeat>
                                </div>
                            )
                        } 
                    
                    }
                </Repeat>
            </div>
        );
    }

    renderSquare(i, has = false) {
        return <Square has={has} onClick={this.handleOpen} key={i}/>;
    }

    handleOpen = (hasBomb) => {
        const { onBombed } = this.props;
        hasBomb && isFunction(onBombed) && onBombed();
    }
}
