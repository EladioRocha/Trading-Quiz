import React from 'react';
import { shallow } from 'enzyme';
import Lesson from './Lesson';

describe('Lesson', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Lesson />);
    expect(wrapper).toMatchSnapshot();
  });
});
