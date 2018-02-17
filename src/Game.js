import React, { Component } from 'react';
import Board from './Board';
import classNames from 'classnames';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { youLose = false } = this.state;
        const gameClasses = classNames('game', { lost: youLose });
        return (
            <div className={gameClasses}>
                <div className="game-board">
                    <Board onBombed={this.handleBombed}/>
                </div>

                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

    handleBombed = () => {
        this.setState({ youLose: true })
    }
}
