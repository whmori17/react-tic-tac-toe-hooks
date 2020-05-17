import * as React from 'react';
import { Board } from '.';
import { Move } from '@components/Game';

export default {
  title: 'Board',
};

const onClick = (i: number) => console.log(i);
const emptySquares: Move = ['', '', '', '', '', '', '', '', ''];
const squares: Move = ['X', '', '', 'O', '', 'X', '', '', ''];

export const empty = () => <Board {...{ onClick, squares: emptySquares }} />;
export const withMoves = () => <Board {...{ onClick, squares }} />;
