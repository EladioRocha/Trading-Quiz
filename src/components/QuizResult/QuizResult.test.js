import React from 'react';
import { shallow } from 'enzyme';
import QuizResult from './QuizResult';

describe('QuizResult', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<QuizResult />);
    expect(wrapper).toMatchSnapshot();
  });
});
