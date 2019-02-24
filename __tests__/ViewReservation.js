/**
 * Unit test for ViewReservation component 
 * @author ritesh.patel
 */
import React from 'react';
import ViewReservation from '../src/components/ViewReservation';
import {MockedProvider} from 'react-apollo/test-utils';
import Reservation from '../src/graphql/queries/Reservation';
import renderer from 'react-test-renderer';

test ('snapshot ViewReservation component', () => {
    const navigation = { navigate: jest.fn(), getParam: jest.fn() };
    const mocks = [
        {
            request: {
                query: Reservation,
                variables: {
                    where: {
                        id: 230729832079907
                    }
                }
            },
            result: {
                data: {
                    reservation: {
                        id: '',
                        name: '',
                        hotelName: '',
                        arrivalDate: '',
                        departureDate: ''
                    }
                },
                loading: {},
                error: {}
            }
        }
    ]    
    const tree = renderer.create(<MockedProvider mocks={mocks}><ViewReservation navigation={navigation} /></MockedProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});