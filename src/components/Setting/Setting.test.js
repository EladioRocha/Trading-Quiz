import React from 'react';
import { shallow } from 'enzyme';
import Setting from './Setting';

describe('Setting', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Setting />);
    expect(wrapper).toMatchSnapshot();
  });
});
