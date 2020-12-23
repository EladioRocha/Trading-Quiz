import React from 'react';
import { shallow } from 'enzyme';
import EarnCoins from './EarnCoins';

describe('EarnCoins', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<EarnCoins />);
    expect(wrapper).toMatchSnapshot();
  });
});
