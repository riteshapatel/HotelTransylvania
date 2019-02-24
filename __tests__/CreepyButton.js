/**
 * Unit test for CreepyButton component (Snapshot Comparison)
 * @author ritesh.patel
 */
import React from 'react';
import CreepyButton from '../src/components/CreepyButton';
import renderer from 'react-test-renderer';

test ('snapshot CreepyButton component', () => {
    const navigate = { navigate: jest.fn() }
    const tree = renderer.create(<CreepyButton title='title' navigateTo='navigateTo' navigate={navigate}/>).toJSON();
    expect(tree).toMatchSnapshot();
});