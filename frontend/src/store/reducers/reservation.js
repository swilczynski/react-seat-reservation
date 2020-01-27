import Reservation from '../../components/reservation/Reservation';

import {SEAT_SELECTED, SEAT_UNSELECTED, RESERVATION_COMPLETED} from '../actions'

export const reservation = (state = [], action) => {
    switch (action.type) {
        case SEAT_SELECTED:
            return new Reservation([...state.selectedSeats, action.seat]);
        case SEAT_UNSELECTED:
            let selectedSeats = state.selectedSeats.filter((seat) => {
                return seat.id !== action.seatId;
            })

            return new Reservation(selectedSeats);
        case RESERVATION_COMPLETED:
            return new Reservation();
        default:
            return new Reservation();
    }
}