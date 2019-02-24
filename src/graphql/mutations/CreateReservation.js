/**
 * createReservation mutation 
 * @author ritesh.patel
 * App landing screen
 */
import gql from 'graphql-tag';

const CreateReservation = gql`
mutation createReservation(
    $data: ReservationCreateInput!
) {
    createReservation(
        data: $data
    ) {
        name
        hotelName
        arrivalDate
        departureDate
    }
}
`
export default CreateReservation;