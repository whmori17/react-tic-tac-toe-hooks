import * as React from 'react';
import { Square } from '.';

export default {
  title: 'Square',
};

const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(e);

export const emptySquare = () => <Square value={''} {...{ onClick }} />;
export const xSquare = () => <Square value={'X'} {...{ onClick }} />;
export const circleSquare = () => <Square value={'O'} {...{ onClick }} />;
