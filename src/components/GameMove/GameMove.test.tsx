import * as React from 'react';
import { shallow } from 'enzyme';
import { GameMove, GameMoveProps } from './GameMove';

describe('GameMove', () => {
  const gameMoveProps: GameMoveProps = {
    onClick: (move: number) => console.log(move),
    step: 1,
  };

  it('should render', () => {
    const wrapper = shallow(<GameMove {...gameMoveProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with step desc', () => {
    const wrapper = shallow(<GameMove {...gameMoveProps} />);

    expect(wrapper.find('button').contains('Go to move #1')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with game start desc', () => {
    const gameMoveStartProps: GameMoveProps = {
      onClick: (move: number) => console.log(move),
      step: 0,
    };
    const wrapper = shallow(<GameMove {...gameMoveStartProps} />);

    expect(wrapper.find('button').contains('Go to game start')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger onClick when clicked', () => {
    const mockCallBack = jest.fn();
    const gameMoveStartProps: GameMoveProps = {
      onClick: mockCallBack,
      step: 0,
    };
    const wrapper = shallow(<GameMove {...gameMoveStartProps} />);

    wrapper.find('button').simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
