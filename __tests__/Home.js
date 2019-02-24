/**
 * Unit test for Home component 
 * @author ritesh.patel
 */
import React from 'react';
import Home from '../src/components/Home';

import renderer from 'react-test-renderer';

test ('snapshot Home component', () => {
    const navigation = { navigate: jest.fn() };
    const tree = renderer.create(<Home navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
});