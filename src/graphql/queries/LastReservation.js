import gql from 'graphql-tag';

const LastReservation = gql`
query lastReservation { 
    lastReservationMadeAt, lastReserved @client
}
`
export default LastReservation;