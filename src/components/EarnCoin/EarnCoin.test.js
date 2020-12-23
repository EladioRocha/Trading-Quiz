import React from 'react';
import { shallow } from 'enzyme';
import EarnCoin from './EarnCoin';

describe('EarnCoin', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<EarnCoin />);
    expect(wrapper).toMatchSnapshot();
  });
});
