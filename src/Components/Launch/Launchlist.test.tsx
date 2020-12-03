import React from 'react';
import { shallow } from 'enzyme';
import LaunchListContainer from './index';

describe('render LaunchListContainer component', () => {

  const container = shallow(<LaunchListContainer />);


  it('should render a div in LaunchListContainer', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });
  
})