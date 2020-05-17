import React, { useState } from 'react';
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

export const Game: React.FC = () => {
  const [state, setState] = useState<GameState>({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
    stepNumber: 0,
  });

  const jumpTo = (step: number): void => {
    setState(prevState => {
      return {
        ...prevState,
        stepNumber: step,
        xIsNext: step % 2 === 0,
      };
    });
  };

  const handleClick = (i: number): void => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const currentMove = history[history.length - 1];
    const squares = currentMove.squares.slice();

    if (GameDirector.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? 'X' : 'O';

    setState(prevState => {
      return {
        ...prevState,
        history: history.concat([
          {
            squares: squares,
          },
        ]),
        xIsNext: !state.xIsNext,
        stepNumber: history.length,
      };
    });
  };

  const history = state.history;
  const currentMove = history[state.stepNumber];
  const winner = GameDirector.calculateWinner(currentMove.squares);
  const moves = history.map((move, step) => {
    const props: GameMoveProps = { step: step, onClick: step => jumpTo(step) };
    return GameMove(props);
  });
  const status = winner ? 'Winner is: ' + winner : 'Next player: ' + (state.xIsNext ? 'X' : 'O');

  return (
    <div className="game">
      <Board squares={currentMove.squares} onClick={(i: number) => handleClick(i)} />
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
