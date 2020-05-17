import * as React from 'react';
import { shallow } from 'enzyme';
import { Square, SquareProps } from './Square';

describe('Square', () => {
  it('renders', () => {
    const squareProps: SquareProps = {
      value: 'X',
      onClick: (i: number) => console.log(i),
    };
    const wrapper = shallow(<Square {...squareProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
