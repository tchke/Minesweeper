import React, { Component } from 'react';
import Square from './Square';
import Repeat from './Repeat';

export default class Board extends Component {
    renderSquare(i, has = false) {
        return <Square has={has}/>;
    }

    render() {
        return (
            <div>
                <Repeat>
                    {
                        (i) => { 
                            return (
                                <div className="board-row">
                                    <Repeat>
                                        { (i) => this.renderSquare(i) }
                                    </Repeat>
                                </div>
                            )
                        } 
                    
                    }
                </Repeat>
            </div>
        );
    }
}
