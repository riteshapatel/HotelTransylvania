/**
 * @class Home component 
 * @author ritesh.patel
 * App landing screen
 */
import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/Global.style.js';
import CreepyButton from './CreepyButton'
const logo = require('../assets/logo.png');

class Home extends Component {
    /** navigation options */
    static navigationOptions = {
        title: 'Frankenhomie'
    };

    /** render component */
    render () {
        const {navigate} = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <Image source={logo} />
                <Text style={styles.frankenwelcome}>Welcome to Hotel Transylvania!</Text>
                <Text style={styles.slogan}>
                    Where spooky happens...{'\n'}
                </Text>      
                <CreepyButton title='Creep' navigateTo='Hotels' navigate={navigate}/>     
            </View>
        );
    }
}

export default Home;
