import React, { Component } from 'react';
import Square from './Square';
import Repeat from './Repeat';
import isFunction from 'lodash.isfunction';
import hasBomb from './hasBomb';

export default class Board extends Component {
    render() {
        const { isRevealed } = this.props;

        return (
            <div>
                <Repeat>
                    {
                        (j) => { 
                            return (
                                <div className="board-row" key={j}>
                                    <Repeat>
                                        { (i) => this.renderSquare(i, hasBomb(j, i), isRevealed) }
                                    </Repeat>
                                </div>
                            )
                        } 
                    
                    }
                </Repeat>
            </div>
        );
    }

    renderSquare(i, hasBomb, isRevealed) {
        return <Square has={hasBomb} isRevealed={isRevealed} onClick={this.handleOpen} key={i}/>;
    }

    handleOpen = (hasBomb) => {
        const { onBombed } = this.props;
        hasBomb && isFunction(onBombed) && onBombed();
    }
}
