import { ADD_TECH, GET_TECH, SET_LOADING } from "../action/types";

const initialState = {
    tech: null,
    loading: false,
};

export const techReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case GET_TECH:
            return { tech: action.payload, loading: false };

        case SET_LOADING:
            return { ...state, loading: true };

        case ADD_TECH:
            return { ...state, tech: [...state.tech, action.payload] };
    }
};
