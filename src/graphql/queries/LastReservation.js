/**
 * @client query to hold last reservation made and the hotel name
 * @author ritesh.patel
 */
import gql from 'graphql-tag';

const LastReservation = gql`
query lastReservation { 
    lastReservationMadeAt, lastReserved @client
}
`
export default LastReservation;