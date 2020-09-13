import * as React from 'react';

export interface GameInfoProps {
  status: string;
}

export const GameInfo: React.FC<GameInfoProps> = ({ status, children }) => {
  return (
    <div className="game-info">
      <div>{status}</div>
      <ol>{children}</ol>
    </div>
  );
};

GameInfo.displayName = 'GameInfo';
