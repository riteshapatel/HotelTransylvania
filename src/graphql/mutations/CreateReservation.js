/**
 * createReservation mutation 
 * @author ritesh.patel
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