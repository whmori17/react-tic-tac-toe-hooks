import * as React from 'react';
import { shallow } from 'enzyme';
import { GameInfo, GameInfoProps } from './GameInfo';

describe('GameInfo', () => {
  const gameInfoProps: GameInfoProps = {
    status: 'Go to move #1',
  };
  const Children = <p key={'key'}></p>;

  it('renders with correct status', () => {
    const wrapper = shallow(<GameInfo {...gameInfoProps}>{Children}</GameInfo>);

    expect(wrapper.find('div').contains('Go to move #1')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with correct moves', () => {
    const wrapper = shallow(<GameInfo {...gameInfoProps}>{Children}</GameInfo>);

    expect(wrapper.find('ol').contains(<p key={'key'}></p>)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
