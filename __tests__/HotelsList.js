/**
 * Unit test for HotelsList component (Snapshot Comparison)
 * @author ritesh.patel
 */
import React from 'react';
import {MockedProvider} from 'react-apollo/test-utils';
import Reservations from '../src/graphql/queries/Reservations';
import LastReservation from '../src/graphql/queries/LastReservation';
import renderer from 'react-test-renderer';
import HotelsList from '../src/components/HotelsList';

test ('snapshot HotelsList component', () => {
    const navigation = { navigate: jest.fn() }

    // request / result for mock provider
    const mocks = [
        {
            request: {
                query: Reservations,
                variables: {
                    where: {
                        name: "Ritesh"
                    }
                }
            },
            result: {
                data: {
                    reservations: [{
                        name: '',
                        hotelName: '',
                        arrivalDate: '',
                        departureDate: '',
                        id: '',
                        __typename: ''
                    }]
                }
            }
        },
        {
            request: {
                query: LastReservation
            },
            result: {
                data: {
                    lastReservationMadeAt: '',
                    lastReserved: ''
                }
            }
        }
    ]
    // render component to JSON
    const tree = renderer.create(<MockedProvider mocks={mocks}><HotelsList navigation={navigation} /></MockedProvider>).toJSON();

    // compare shanpshots
    expect(tree).toMatchSnapshot();
});``