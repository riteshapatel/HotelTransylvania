/**
 * @class CreepyItem component 
 * @author ritesh.patel
 */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/Global.style.js';
import CreepyButton from './CreepyButton';

export default class CreepyItem extends Component {
    render () {        
        const data = this.props.data || {};    
        return (
            <View style={styles.creepy_item}>
                <Image source={require('../assets/mummy_small.png')} />
                <View>
                <Text style={styles.item_name}>{`${this.props.hotelName}`}</Text>
                <Text style={styles.item_small}>{`\nName: ${this.props.data.name}\n`}{`From: ${this.props.data.arrivalDate}\n`}{`To: ${this.props.data.departureDate}\n`}</Text>
                </View>
                <View>
                <CreepyButton title='Reserve Coffin' navigateTo='Add' navigate={this.props.navigate} data={data}/> 
                <CreepyButton title='View Coffin' navigateTo='View' navigate={this.props.navigate} data={data}/>                                                     
                </View>
            </View>                
        )
    }
}