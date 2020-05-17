import * as React from 'react';
import { shallow } from 'enzyme';
import { Square, SquareProps } from './Square';

describe('Square', () => {
  it('renders', () => {
    const squareProps: SquareProps = {
      value: 'X',
      onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(e),
    };
    const wrapper = shallow(<Square {...squareProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
