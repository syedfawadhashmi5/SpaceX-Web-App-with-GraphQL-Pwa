import React from 'react';
import { shallow, mount } from 'enzyme';
import LaunchDetailssd from './LaunchDetails';

describe('render Timer component', () => {

  const container = shallow(<LaunchDetailssd />);


  it('should render a div in Timer', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });
  
})