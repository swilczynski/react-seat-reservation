import axios from 'axios';

import config from '../../config';

import {SEAT_SELECTED, SEAT_UNSELECTED, RESERVATION_COMPLETED} from '.'

export const selectSeat = (seat) => ({
    type: SEAT_SELECTED,
    seat
});

export const unSelectSeat = (seatId) => ({
    type: SEAT_UNSELECTED,
    seatId
});

export const reservationCompleted = () => ({
    type: RESERVATION_COMPLETED
});

export const makeReservation = (reservation) => (dispatch) => {
    return axios.post(`${config.apiUrl}/reservation`, reservation).then(() => {
        dispatch(reservationCompleted());
    });
};


