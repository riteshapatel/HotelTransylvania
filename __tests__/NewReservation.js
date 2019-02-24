/**
 * Unit test for NewReservation component 
 * @author ritesh.patel
 */
import React from 'react';
import NewReservation from '../src/components/NewReservation';
import {MockedProvider} from 'react-apollo/test-utils';

import renderer from 'react-test-renderer';

test ('snapshot NewReservation component', () => {
    const navigation = { navigate: jest.fn(), getParam: jest.fn() };
    const tree = renderer.create(<MockedProvider><NewReservation navigation={navigation} /></MockedProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});