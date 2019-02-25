/**
 * reservations query
 * @author ritesh.patel
 */
import gql from 'graphql-tag';

const Reservations = gql`
query Reservations (
        $where: ReservationWhereInput!
    ){
        reservations(
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
export default Reservations;