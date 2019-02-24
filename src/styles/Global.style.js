/**
 * @class Global Styles
 * @author ritesh.patel
 * App landing screen
 */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#C800CB',
        flex: 1,
        justifyContent: 'center'
    },
    form_container: {
        backgroundColor: '#fff',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slogan: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
        color: 'white'
    },
    frankenwelcome: {
        fontSize: 24,
        margin: 10,
        textAlign: 'center',
        color: 'white'
    },
    creepy_button: {
        backgroundColor: '#640544',
        borderColor: '#404040',
        borderWidth: 1,
        padding: 5,
        textAlign: 'center',
        borderRadius: 4,
        marginBottom: 5
    },
    creepy_text: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    creepy_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 2,
        backgroundColor:'#F3D9EA',
        borderColor: '#CCC',
        color: 'white',
        borderWidth: 1,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 10
    },
    item_name: {
        color: '#650444',
        fontWeight: 'bold'
    },
    item_small: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    form_header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#640544',
        paddingBottom: 10
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#640544',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    card: {
        textAlign: 'left',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#404040',
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#F3D9EA'
    },
    view_coffin: {
        fontWeight: 'normal'
    },
    coffin_slogan: {
        fontStyle: 'italic',
        fontFamily: 'Baskerville',
        fontSize: 24,
        color: '#fff'
    },
    coffin_date: {
        fontSize: 12,
        fontStyle: 'italic'
    },
    coffin_item: {
        marginTop: 20
    },
    last_reservation_text: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 12,
        fontWeight: 'bold'
    }
});