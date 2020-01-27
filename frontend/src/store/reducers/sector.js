import {SECTOR_DATA_FETCHED, SECTOR_MAP_FETCHED} from '../actions';

export const sector = (state = [], action) => {
    switch (action.type) {
        case SECTOR_DATA_FETCHED:
            return Object.assign({}, state, {
                reservedSeats: action.sector.reservedSeats,
                seatPrices: action.sector.seatPrices,
                sectorMapUrl: action.sector.sectorMapUrl
            })
        case SECTOR_MAP_FETCHED:
            return Object.assign({}, state, {
                sectorMap: action.map,
            })
        default:
            return state;
    }
}