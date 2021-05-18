import { ADD_TECH, GET_TECH, LOG_ERROR, SET_LOADING } from "./types";

export const getTech = () => async dispatch => {
    setLoading();
    try {
        const res = await fetch("/tech");
        const data = await res.json();
        dispatch({ type: GET_TECH, payload: data });
    } catch (error) {
        dispatch({ type: LOG_ERROR, payload: error.response });
    }
};

export const addTech = tech => async dispatch => {
    try {
        const res = await fetch("/tech", {
            method: "POST",
            body: JSON.stringify(tech),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        dispatch({ type: ADD_TECH, payload: data });
    } catch (error) {
        console.log(error.response);
        dispatch({ type: LOG_ERROR, payload: error.response });
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
