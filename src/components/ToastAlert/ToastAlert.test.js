import React from 'react';
import { shallow } from 'enzyme';
import ToastAlert from './ToastAlert';

describe('ToastAlert', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ToastAlert />);
    expect(wrapper).toMatchSnapshot();
  });
});
