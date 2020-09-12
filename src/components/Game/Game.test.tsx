import * as React from 'react';
import { shallow } from 'enzyme';
import { Game, GameProps } from './Game';
import { Move } from '@customTypes/Move';

describe('Game', () => {
  it('should render', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should set X on clicked move', () => {
    const wrapper = shallow(<Game history={[Array<Move>(9).fill('')]} />);

    wrapper.find('Board').simulate('click', 3);

    const gameProps = (wrapper.props() as unknown) as Required<GameProps>;

    expect(gameProps.history[0][3]).toBe('X');
    expect(wrapper).toMatchSnapshot();
  });
});
