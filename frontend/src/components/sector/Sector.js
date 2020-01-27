import React, { Component } from 'react'
import Toast from 'light-toast';

import Seat from './Seat';

import './Sector.scss';

class Sector extends Component {
    async componentDidMount() {
        const $this = this;

        Toast.loading('Loading venue');

        await $this.props.fetchSectorData();
        await $this.props.fetchSectorMap(this.props.sector.sectorMapUrl);

        Toast.success('Select your seats', 1000);
    }

    shouldComponentUpdate(nextProps) {
        const hasMapChanged = nextProps.sector.sectorMap !== this.props.sector.sectorMap;

        return hasMapChanged;
    }

    componentDidUpdate(prevProps) {
        this.refs.sector.innerHTML = this.props.sector.sectorMap;

        const reservedSeats = this.props.sector.reservedSeats || [];
        const seatPrices = this.props.sector.seatPrices;
        const sectorSeats = this.refs.sector.getElementsByTagName('g');

        for (const sectorSeat of sectorSeats) {
            const seat = new Seat();

            seat.id = sectorSeat.getAttribute('id');
            seat.number = sectorSeat.getAttribute('id').replace('seat-no-', '');

            seat.price = seatPrices.default;

            if (seatPrices[seat.id] !== undefined) {
                seat.price = seatPrices[seat.id];
            }

            if (reservedSeats.includes(seat.id)) {
                sectorSeat.getElementsByTagName('rect')[0].classList.add('reserved');
            } else {
                sectorSeat.addEventListener('click', (e) => {
                    if (e.target.classList.contains('selected')) {
                        e.target.classList.remove('selected');
                        this.props.unSelectSeat(seat.id);
                    } else {
                        e.target.classList.add('selected');
                        this.props.selectSeat(seat);
                    }
                })
            }
        }
    }

    render() {
        if (this.props.sector.sectorMap === undefined) {
            return null;
        }

        return (
            <div className="sector-container">
                <ul className="legend">
                    <li className="occupied">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <g>
                                <rect x="3" y="3" width="11" height="11" rx="1.28" ry="1.28" />
                            </g>
                        </svg>
                        occupied seats
                    </li>
                    <li className="vacant">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <g>
                                <rect x="3" y="3" width="11" height="11" rx="1.28" ry="1.28" />
                            </g>
                        </svg>
                        available seats
                    </li>
                    <li className="selected">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <g>
                                <rect x="3" y="3" width="11" height="11" rx="1.28" ry="1.28" />
                            </g>
                        </svg>
                        your seats
                    </li>
                </ul>
                <object id="sector" ref="sector" className="sector"><span>Podgląd sali</span></object>
            </div>
        )
    }
}

export default Sector