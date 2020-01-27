import axios from 'axios';

import config from '../../config';

import {SECTOR_DATA_FETCHED, SECTOR_MAP_FETCHED} from '.'

export const sectorDataFetched = (sector) => ({
    type: SECTOR_DATA_FETCHED,
    sector
});

export const sectorMapFetched = (map) => ({
    type: SECTOR_MAP_FETCHED,
    map
});

export const fetchSectorData = () => (dispatch) => {
    return axios.get(`${config.apiUrl}/sector`).then((result) => {
        dispatch(sectorDataFetched(result.data));
    });
};

export const fetchSectorMap = (sectorMapUrl) => (dispatch) => {
    return axios.get(sectorMapUrl).then((result) => {
        dispatch(sectorMapFetched(result.data));
    });
};