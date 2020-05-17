import React from 'react';

export interface GameMoveProps {
  step: number;
  onClick: (move: number) => void;
}

export const GameMove: React.FC<GameMoveProps> = ({ step, onClick }) => {
  const desc = step ? 'Go to move #' + step : 'Go to game start';
  return (
    <li key={step}>
      <button onClick={() => onClick(step)}>{desc}</button>
    </li>
  );
};
