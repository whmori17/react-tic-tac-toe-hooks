import * as React from 'react';
import { GameMove } from '.';

export default {
  title: 'GameMove',
};

const onClick = (i: number) => console.log(i);

export const gameStartMove = () => <GameMove step={0} {...{ onClick }} />;
export const stepOneGameMove = () => <GameMove step={1} {...{ onClick }} />;
