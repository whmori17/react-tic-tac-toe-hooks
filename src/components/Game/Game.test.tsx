import * as React from 'react';
import { shallow } from 'enzyme';
import { Game } from './Game';

describe('Game', () => {
  it('should render', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render', () => {
    const wrapper = shallow(<Game />);

    wrapper.simulate('click', 0);

    expect(wrapper).toMatchSnapshot();
  });
});
