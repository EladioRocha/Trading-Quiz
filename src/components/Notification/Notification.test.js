import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper).toMatchSnapshot();
  });
});
