import React from 'react';
import { shallow } from 'enzyme';
import LessonLecture from './LessonLecture';

describe('LessonLecture', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LessonLecture />);
    expect(wrapper).toMatchSnapshot();
  });
});
