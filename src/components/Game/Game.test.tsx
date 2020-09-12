import * as React from 'react';
import { shallow } from 'enzyme';
import { Game } from './Game';

describe('Game', () => {
  it('renders', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper).toMatchSnapshot();
  });
});
