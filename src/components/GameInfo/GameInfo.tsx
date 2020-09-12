import * as React from 'react';

export interface GameInfoProps {
  status: string;
  moves: React.ReactNode[];
}

export const GameInfo: React.FC<GameInfoProps> = ({ status, moves }) => {
  return (
    <div className="game-info">
      <div>{status}</div>
      <ol>{moves}</ol>
    </div>
  );
};

GameInfo.displayName = 'GameInfo';
