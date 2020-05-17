import * as React from 'react';
import { shallow } from 'enzyme';
import { Board, BoardProps } from './Board';

describe('Board', () => {
  const boardProps: BoardProps = {
    squares: ['', '', ''],
    onClick: (i: number) => console.log(i),
  };

  it('renders', () => {
    const wrapper = shallow(<Board {...boardProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
