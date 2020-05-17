import * as React from 'react';
import { shallow } from 'enzyme';
import { GameMove, GameMoveProps } from './GameMove';

describe('GameMove', () => {
  const gameMoveProps: GameMoveProps = {
    onClick: (move: number) => console.log(move),
    step: 1,
  };

  it('renders', () => {
    const wrapper = shallow(<GameMove {...gameMoveProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with step desc', () => {
    const wrapper = shallow(<GameMove {...gameMoveProps} />);

    expect(wrapper.find('button').contains('Go to move #1')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with game start desc', () => {
    const gameMoveStartProps: GameMoveProps = {
      onClick: (move: number) => console.log(move),
      step: 0,
    };
    const wrapper = shallow(<GameMove {...gameMoveStartProps} />);

    expect(wrapper.find('button').contains('Go to game start')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
