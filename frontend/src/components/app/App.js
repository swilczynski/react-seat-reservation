import React, { Component } from 'react'

import SectorContainer from '../sector/SectorContainer'
import SummaryContainer from '../summary/SummaryContainer'

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="container seat-reservation">
                <h1>Seat Reservation</h1>
                <div className="seat-selection">
                    <SectorContainer></SectorContainer>
                </div>
                <SummaryContainer></SummaryContainer>
            </div>
        )
    }
}

export default App;
