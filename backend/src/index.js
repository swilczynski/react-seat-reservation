const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const dbAdapter = new FileAsync('./data/db.json');

const app = express();

app.use(cors());
app.use(parser.raw())
app.use(parser.json())

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

app.get(
    '/sector',
    async (req, res) => {
        await sleep(getRandomInt(200, 1000));

        const db = await low(dbAdapter);

        const sector = await db.get('sectors').find().value();
        const seatReservations = await db.get('reservations').value();

        let reservedSeats = [];

        if (seatReservations !== undefined) {
            reservedSeats = seatReservations.reduce(
                (seats, reservation) => {
                    let seatIds = [];

                    for (let key in reservation.selectedSeats) {
                        seatIds.push(reservation.selectedSeats[key].id);
                    }

                    seats = [...seats, ...seatIds];

                    return seats;
                },
                []
            );
        }

        sector.reservedSeats = reservedSeats;

        res.send(sector);
    }
)

app.post(
    '/reservation',
    async (req, res) => {
        await sleep(getRandomInt(200, 1000));

        const db = await low(dbAdapter);
        await db.get('reservations').push(req.body).write();

        res.send({"status": "OK"});
    }
)

app.listen(
    3100
);