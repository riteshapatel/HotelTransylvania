/**
 * @class View Reservation component 
 * @author ritesh.patel
 * App landing screen
 */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Reservation from '../graphql/queries/Reservation.js';
import { Query, graphql } from 'react-apollo';
import styles from '../styles/Global.style.js';

class ViewReservation extends Component {
    render () { 
        const {navigate} = this.props.navigation;
        const id = this.props.navigation.getParam('id', '');

        return (
            <View style={styles.container}>
                <Text style={styles.coffin_slogan}>Are these monsters gonna kill me?{'\n'}</Text>

                <Query
                    query={Reservation} variables={{where: {id: id}}}>
                    {({ loading, error, data }) => {
                        if (loading) return (<View><Text>Loading...</Text></View>)
                        if (error) return (<View><Text>Error...{error}</Text></View>)
    
                        return (
                            <View style={styles.card}>
                                <Image source={require('../assets/mummy_small.png')} />
                                <View style={styles.coffin_item}>
                                    <Text style={styles.view_coffin}>{data.reservation.name} @ {data.reservation.hotelName}</Text>
                                    <Text style={styles.coffin_date}>({data.reservation.arrivalDate} - {data.reservation.departureDate}){'\n'}</Text>
                                </View>
                            </View>
                        )
                    }}
                </Query>
            </View>
        )
    }
}

export default ViewReservation;