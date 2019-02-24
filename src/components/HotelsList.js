/**
 * @class HotelsList component 
 * @author ritesh.patel
 * App landing screen
 */
import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import CreepyButton from './CreepyButton';
import Reservations from '../graphql/queries/Reservations.js';
import LastReservation from '../graphql/queries/LastReservation';
import CreepyItem from './CreepyItem';
import { Query, graphql, ApolloConsumer } from 'react-apollo';
import styles from '../styles/Global.style.js';
import gql from 'graphql-tag';

class HotelsList extends Component {
    render () { 
        const {navigate} = this.props.navigation;
        const name = 'Ritesh';

        return (
            <View>
                <Query
                    query={Reservations} 
                    variables={{where: {name: 'Ritesh'}}}
                    pollInterval={500}
                >
                    {({ loading, error, data }) => {
                        if (loading) return (<Text>Loading...</Text>)
                        if (error) return (<Text>Error...{error}</Text>)

                        return (
                            <FlatList data={data.reservations}
                                renderItem={({item}) => 
                                    <View>
                                        <CreepyItem hotelName={item.hotelName} navigate={navigate} data={item}/>
                                    </View>
                                } 
                                keyExtractor={(item, index) => index.toString()} 
                            />
                        )
                    }}
                </Query>
                <Query
                    query={LastReservation}>
                    {({ data }) => {
                        let displayText = '';
                        if (data.lastReservationMadeAt === 'None') {
                            displayText = '** No reservations made yet **'
                        } else {
                            displayText = `${data.lastReserved} @ ${data.lastReservationMadeAt}`;
                        }
                        return (
                            <Text style={styles.last_reservation_text}>{displayText}</Text>
                        )
                    }}
                </Query>
            </View>
        )
    }
}
export default HotelsList;