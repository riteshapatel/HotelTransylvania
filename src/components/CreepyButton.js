/**
 * @class CreepyButton component 
 * @author ritesh.patel
 */
import React, {Component} from 'react';
import {Text, Button, TouchableOpacity} from 'react-native';
import styles from '../styles/Global.style.js';

export default class CreepyButton extends Component {
    render () {
        const data = this.props.data || {}
        return (
            <TouchableOpacity onPress={() => this.props.navigate(this.props.navigateTo, data)} style={styles.creepy_button}>
                <Text style={styles.creepy_text}>{this.props.title}</Text>
            </TouchableOpacity>                    
        )
    }
}