import React, { useState } from 'react';
import { GameDirector } from '@services/GameDirector';
import { GameMoveProps, GameMove, Board } from '..';
import { Move } from '@customTypes/Move';
import { GameInfo } from '@components/GameInfo';

export interface BoardSquares {
  squares: Move;
}

export const Game: React.FC = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<BoardSquares[]>([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleClick = (i: number): void => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const currentMove = currentHistory[currentHistory.length - 1];
    const squares = currentMove.squares.slice();

    if (GameDirector.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(prevHistory => {
      return [...prevHistory, { squares }];
    });
    setXIsNext(!xIsNext);
    setStepNumber(history.length);
  };

  const currentMove = history[stepNumber];
  const winner = GameDirector.calculateWinner(currentMove.squares);
  const status = winner ? 'Winner is: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');
  const moves = history.map((move, step) => {
    const props: GameMoveProps = { step: step, onClick: step => jumpTo(step) };
    return <GameMove {...props} key={step} />;
  });

  return (
    <div className="game">
      <Board squares={currentMove.squares} onClick={(i: number) => handleClick(i)} />
      <GameInfo {...{ status, moves }} />
    </div>
  );
};
