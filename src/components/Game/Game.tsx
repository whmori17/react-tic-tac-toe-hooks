import React from 'react';
import { GameDirector } from '@services/GameDirector';
import { GameMoveProps, GameMove, Board } from '..';
import { Move } from '@customTypes/Move';

export interface BoardSquares {
  squares: Move;
}
export interface GameState {
  history: BoardSquares[];
  xIsNext: boolean;
  stepNumber: number;
}

export class Game extends React.Component {
  public state: GameState = {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
    stepNumber: 0,
  };

  public handleClick(i: number): void {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentMove = history[history.length - 1];
    const squares = currentMove.squares.slice();

    if (GameDirector.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  public render() {
    const history = this.state.history;
    const currentMove = history[this.state.stepNumber];
    const winner = GameDirector.calculateWinner(currentMove.squares);
    const moves = history.map((move, step) => {
      const props: GameMoveProps = { step: step, onClick: step => this.jumpTo(step) };
      return GameMove(props);
    });
    const status = winner ? 'Winner is: ' + winner : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={currentMove.squares} onClick={(i: number) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  public jumpTo(step: number): void {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
}
