import { FETCH_DATA, FILTER_TEXT, CHANGE_STATUS } from '../actions/types';

const INITIAL_STATE = {
    data: [],
    filterText: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload.data,
            };
        case FILTER_TEXT:
            return {
                ...state,
                filterText: action.payload.text,
            };
        case CHANGE_STATUS:
            return {
                ...state,
                data: state.data.map(reading =>
                    reading.name === action.payload.name
                        ? { ...reading, active: action.payload.newStatus }
                        : reading,
                ),
            };
        default:
            return state;
    }
};
