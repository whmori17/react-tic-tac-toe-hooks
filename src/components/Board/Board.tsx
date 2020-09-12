import React from 'react';
import { Square } from '..';
import { Moves } from '@customTypes/Move';

export interface BoardProps {
  squares: Moves;
  onClick: (position: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const boardRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return (
    <div className="game-board">
      {boardRows.map((row, index) => (
        <div className="board-row" key={index}>
          {row.map(position => (
            <Square value={squares[position]} onClick={() => onClick(position)} key={position} />
          ))}
        </div>
      ))}
    </div>
  );
};
