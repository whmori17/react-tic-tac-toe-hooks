import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Game } from './Game';

describe('Game', () => {
  it('should render', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render clicked move', () => {
    const wrapper = mount(<Game />);

    wrapper.find('Board').simulate('click', 0);

    expect(wrapper).toMatchSnapshot();
  });
});
