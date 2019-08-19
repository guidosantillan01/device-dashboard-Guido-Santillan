import { FETCH_DATA, FILTER_TEXT } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: [action.payload],
            };
        case FILTER_TEXT:
            return {
                ...state,
                filterText: action.payload.text,
            };
        default:
            return state;
    }
};
