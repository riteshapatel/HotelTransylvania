/**
 * Unit test for CreepyItem component 
 * @author ritesh.patel
 */
import React from 'react';
import CreepyItem from '../src/components/CreepyItem';
import {MockedProvider} from 'react-apollo/test-utils';

import renderer from 'react-test-renderer';

test ('snapshot CreepyItem component', () => {
    const data = {};
    const tree = renderer.create(<MockedProvider><CreepyItem data={data} /></MockedProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});