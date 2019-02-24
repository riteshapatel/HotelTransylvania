/**
 * @class NewReservation component 
 * @author ritesh.patel
 * New reservation form
 */
import React, {Component} from 'react';
import {Text, View, Button, AlertIOS, Image} from 'react-native';
import CreateReservation from '../graphql/mutations/CreateReservation';
import styles from '../styles/Global.style.js';
import t from 'tcomb-form-native';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
const johnny = require('../assets/johnny.png');

const Form = t.form.Form;

const options = {
    auto: 'placeholders'
}

const Reservation = t.struct({
    name: t.String,
    hotelName: t.String,
    arrivalDate: t.String,
    departureDate: t.String
});

const UpdateTime = gql`
    mutation UpdateTime ($hotelName: String!) {
        updateTransactionTime(hotelName: $hotelName) @client
    }
`

class NewReservation extends Component {
    render () { 
        const hotelName = this.props.navigation.getParam('hotelName', 'NONE');

        let value = {
            hotelName: hotelName
        }
        
        return (
            <View style={styles.form_container}>
            <Image source={johnny} />
            <Mutation 
                mutation={CreateReservation}
            >
                {(createReservation, { client, data }) => (
                    <View>
                        
                        <Text style={styles.form_header}>{'\n'}New Coffin: {hotelName}</Text>
                        <Form ref={c => this._form = c} type={Reservation} value={value} options={options}/>
                        <Button type="Submit" title="Submit" onPress={(navigate) => {
                            const data = this._form.getValue();
                            if (data && data.name !== '' && data.arrivalDate !== '' && data.departureDate !== '') {
                                if (Date.parse(data.arrivalDate) > Date.parse(data.departureDate)) {
                                    AlertIOS.alert('Invalid dates')
                                } else {
                                    createReservation({variables: {
                                        data: data
                                    }})
                                    this.props.navigation.navigate('Hotels');
                                    client.mutate({
                                        mutation: UpdateTime,
                                        variables: {hotelName}
                                    });
                                }
                            } else {
                                AlertIOS.alert('Invalid values');
                            }

                        }} />                
                    </View>                    
                )}
            </Mutation>
            
            </View>
        );
    }
}

export default NewReservation;