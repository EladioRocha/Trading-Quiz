import React from 'react';
import { shallow } from 'enzyme';
import Leaderboard from './Leaderboard';

describe('Leaderboard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Leaderboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
