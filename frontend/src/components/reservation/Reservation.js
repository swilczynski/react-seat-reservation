class Reservation {
    constructor(selectedSeats = []) {
        this.selectedSeats = selectedSeats;
    }

    getTotal() {
        return this.selectedSeats.reduce((total, seat) => {
            total += parseInt(seat.price);
            return total;
        }, 0);
    }
}

export default Reservation;