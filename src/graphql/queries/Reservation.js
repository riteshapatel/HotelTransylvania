/**
 * reservation query
 * @author ritesh.patel
 * App landing screen
 */
import gql from 'graphql-tag';

const Reservation = gql`
query Reservation (
        $where: ReservationWhereUniqueInput!
    ){
        reservation(
            where: $where
        ) {
            id
            name 
            hotelName 
            arrivalDate 
            departureDate 
        }
    
    }
`
export default Reservation;