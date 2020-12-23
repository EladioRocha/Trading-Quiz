import React from 'react';
import { shallow } from 'enzyme';
import QuizGame from './QuizGame';

describe('QuizGame', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<QuizGame />);
    expect(wrapper).toMatchSnapshot();
  });
});
