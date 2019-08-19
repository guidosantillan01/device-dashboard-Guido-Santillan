import { FETCH_DATA, FILTER_TEXT } from './types';

import getDevicesData from '../api/getDevicesData';

export const fetchData = data => {
    return {
        type: FETCH_DATA,
        payload: {
            data,
        },
    };
};

export const startFetchData = () => {
    return async dispatch => {
        try {
            const response = await getDevicesData();
            const data = response.data;
            return dispatch(fetchData(data));
        } catch (error) {
            throw new Error(error);
        }
    };
};

export const filterText = text => {
    return {
        type: FILTER_TEXT,
        payload: {
            text,
        },
    };
};
