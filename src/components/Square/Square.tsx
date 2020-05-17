import React from 'react';

export interface SquareProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value: string;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className={'square'} {...{ onClick }}>
      {value}
    </button>
  );
};
