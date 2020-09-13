import React from 'react';
import { Board } from '..';
import { GameInfo } from '@components/GameInfo';
import { useGame } from '@services/hooks';

export const Game: React.FC = () => {
  const { history, stepNumber, handleClick, status, moves } = useGame();

  return (
    <div className="game">
      <Board squares={history[stepNumber]} onClick={(position: number) => handleClick(position)} />
      <GameInfo {...{ status, moves }} />
    </div>
  );
};

Game.displayName = 'Game';
