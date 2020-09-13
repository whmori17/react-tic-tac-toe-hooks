import { FC } from 'react';
import * as React from 'react';
import { Board, GameMove } from '..';
import { GameInfo } from '@components/GameInfo';
import { useGame } from '@services/hooks';

export const Game: FC = () => {
  const { history, stepNumber, handleClick, status, jumpTo } = useGame();

  return (
    <div className="game">
      <Board squares={history[stepNumber]} onClick={(position: number) => handleClick(position)} />
      <GameInfo {...{ status }}>
        {history.map((_, step) => (
          <GameMove {...{ step, onClick: step => jumpTo(step) }} key={step} />
        ))}
      </GameInfo>
    </div>
  );
};

Game.displayName = 'Game';
