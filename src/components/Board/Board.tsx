import React from 'react';
import { Square } from '..';
import { Move } from '@customTypes/Move';

export interface BoardProps {
  squares: Move;
  onClick: (i: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const firstRow = [0, 1, 2];
  const secondRow = [3, 4, 5];
  const thirdRow = [6, 7, 8];
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} key={i} />;
  };

  return (
    <div className="game-board">
      <div className="board-row">{firstRow.map(i => renderSquare(i))}</div>
      <div className="board-row">{secondRow.map(i => renderSquare(i))}</div>
      <div className="board-row">{thirdRow.map(i => renderSquare(i))}</div>
    </div>
  );
};
