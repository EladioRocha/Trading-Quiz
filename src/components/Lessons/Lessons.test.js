import React from 'react';
import { shallow } from 'enzyme';
import Lessons from './Lessons';

describe('Lessons', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Lessons />);
    expect(wrapper).toMatchSnapshot();
  });
});
