import * as React from 'react';
import { Board } from '.';
import { Moves } from '@customTypes/Move';

export default {
  title: 'Board',
};

const onClick = (i: number) => console.log(i);
const emptySquares: Moves = ['', '', '', '', '', '', '', '', ''];
const squares: Moves = ['X', '', '', 'O', '', 'X', '', '', ''];

export const empty = () => <Board {...{ onClick, squares: emptySquares }} />;
export const withMoves = () => <Board {...{ onClick, squares }} />;
