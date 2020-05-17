import React, { useState } from 'react';
import { GameDirector } from '@services/GameDirector';
import { GameMoveProps, GameMove, Board } from '..';
import { Move } from '@customTypes/Move';
import { GameInfo } from '@components/GameInfo';

export const Game: React.FC = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Move[]>([Array(9).fill('')]);

  const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    setHistory(prevHistory => prevHistory.filter((move, i) => i <= step));
  };

  const handleClick = (i: number): void => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const moves = currentHistory[currentHistory.length - 1];
    const squares = moves.slice();

    if (GameDirector.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setXIsNext(!xIsNext);
    setStepNumber(history.length);
    setHistory(prevHistory => [...prevHistory, squares]);
  };

  const move = history[stepNumber];
  const winner = GameDirector.calculateWinner(move);
  const status = winner ? 'Winner is: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');
  const moves = history.map((move, step) => {
    const props: GameMoveProps = { step, onClick: step => jumpTo(step) };
    return <GameMove {...props} key={step} />;
  });

  return (
    <div className="game">
      <Board squares={move} onClick={(position: number) => handleClick(position)} />
      <GameInfo {...{ status, moves }} />
    </div>
  );
};
