import React, { Component } from 'react'
import Toast from 'light-toast';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Seat</th>
                <th>Price</th>
            </tr>
        </thead>
    )
};

const TableFooter = (props) => {
    return (
        <tfoot>
            <tr>
                <th>Total</th>
                <th>{props.total} zł</th>
            </tr>
        </tfoot>
    )
};

const TableBody = (props) => {
    const rows = props.selectedSeats.map((row, index) => {
        return (
            <tr key={index}>
                <td>Seat {row.number}</td>
                <td>{row.price} zł</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Summary extends Component {
    makeReservation = async () => {
        const $this = this;
        const total = this.props.reservation.getTotal();

        Toast.loading('Processing');

        await $this.props.makeReservation(this.props.reservation);

        Toast.success(`Order complete! Total price: $${total}`);
    }

    render() {
        if (this.props.reservation.selectedSeats.length <= 0) {
            return null;
        }

        return (
            <div className="summary">
                <Table striped bordered hover>
                    <TableHeader />
                    <TableBody selectedSeats={this.props.reservation.selectedSeats} />
                    <TableFooter total={this.props.reservation.getTotal()} />
                </Table>
                <Button onClick={this.makeReservation}>Make reservation</Button>
            </div>
        )
    }
}

export default Summary