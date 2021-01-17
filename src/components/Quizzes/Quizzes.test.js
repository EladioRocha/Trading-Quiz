import React from 'react';
import { shallow } from 'enzyme';
import Quizes from './Quizes';

describe('Quizes', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Quizes />);
    expect(wrapper).toMatchSnapshot();
  });
});
