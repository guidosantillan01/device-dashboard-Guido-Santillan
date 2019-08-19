import { FETCH_DATA, FILTER_TEXT, CHANGE_STATUS, RESET_FILTERS } from './types';

import getDevicesData from '../api/getDevicesData';
import changeReadingStatus from '../api/changeReadingStatus';

export const fetchData = data => ({
    type: FETCH_DATA,
    payload: {
        data,
    },
});

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

export const changeStatus = (name, newStatus) => ({
    type: CHANGE_STATUS,
    payload: {
        name,
        newStatus,
    },
});

export const startChangeStatus = (name, status) => {
    return async dispatch => {
        try {
            const newStatus = !status;
            const res = await changeReadingStatus(name, newStatus);
            if (res.ok) {
                return dispatch(changeStatus(name, newStatus));
            }
        } catch (error) {
            throw new Error(error);
        }
    };
};

export const filterText = text => ({
    type: FILTER_TEXT,
    payload: {
        text,
    },
});

export const resetFilters = () => ({
    type: RESET_FILTERS,
});
