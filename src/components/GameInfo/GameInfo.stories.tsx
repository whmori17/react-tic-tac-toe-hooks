import * as React from 'react';
import { GameInfo, GameInfoProps } from '.';

export default {
  title: 'GameInfo',
};

const gameInfoProps: GameInfoProps = {
  status: 'Go to move #1',
  moves: [<p key={'key'}>fake click</p>],
};

export const gameStartMove = () => <GameInfo {...gameInfoProps} />;
