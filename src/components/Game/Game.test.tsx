import * as React from 'react';
import { shallow } from 'enzyme';
import { Game } from './Game';
import { BoardProps } from '@components/Board/Board';
import { GameInfoProps } from '@components/GameInfo';

describe('Game', () => {
  it('should render', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should set X on clicked move', () => {
    const wrapper = shallow(<Game />);

    wrapper.find('Board').simulate('click', 3);

    const boardProps = (wrapper.find('Board').props() as unknown) as BoardProps;

    expect(boardProps.squares[3]).toBe('X');
    expect(wrapper).toMatchSnapshot();
  });

  it('should set X as firsat move adn O as second', () => {
    const wrapper = shallow(<Game />);

    wrapper.find('Board').simulate('click', 3);

    const boardProps = (wrapper.find('Board').props() as unknown) as BoardProps;

    expect(boardProps.squares[3]).toBe('X');

    wrapper.find('Board').simulate('click', 2);

    const boardProps2 = (wrapper.find('Board').props() as unknown) as BoardProps;

    expect(boardProps2.squares[2]).toBe('O');
    expect(wrapper).toMatchSnapshot();
  });

  it('should set X as firsat move adn O as second', () => {
    const wrapper = shallow(<Game />);

    wrapper.find('Board').simulate('click', 3);

    const boardProps = (wrapper.find('Board').props() as unknown) as BoardProps;

    expect(boardProps.squares[3]).toBe('X');

    wrapper.find('Board').simulate('click', 2);

    const boardProps2 = (wrapper.find('Board').props() as unknown) as BoardProps;

    expect(boardProps2.squares[2]).toBe('O');
    expect(wrapper).toMatchSnapshot();
  });

  it('should win X', () => {
    // TODO: spostare l'hook in un file singolo e testarlo con renderHook & act
    const wrapper = shallow(<Game />);

    wrapper.find('Board').simulate('click', 0);
    wrapper.find('Board').simulate('click', 3);
    wrapper.find('Board').simulate('click', 1);
    wrapper.find('Board').simulate('click', 4);
    wrapper.find('Board').simulate('click', 2);
    wrapper.find('Board').simulate('click', 5);

    wrapper.render();

    const boardProps2 = (wrapper.find('GameInfo').props() as unknown) as GameInfoProps;

    expect(boardProps2.status).toBe('Winner is: X');
    expect(wrapper).toMatchSnapshot();
  });
});
