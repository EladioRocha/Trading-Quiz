import React from 'react';
import { shallow } from 'enzyme';
import Leader from './Leader';

describe('Leader', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Leader />);
    expect(wrapper).toMatchSnapshot();
  });
});
