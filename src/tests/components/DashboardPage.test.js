import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should load ExpenseDashboardPage correctly', () => {
    //Method for enzyme
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
    
});