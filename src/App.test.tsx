import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('render App component', () => {

  const container = shallow(<App />);


  it('should render a div in App', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(2);

    expect(container).toMatchSnapshot();

  });
  
})