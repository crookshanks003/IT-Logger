import {
    FILTER_LOG,
    GET_LOGS,
    SET_LOADING,
    LOG_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    CLEAR_FILTER,
} from "./types";

export const getLogs = () => {
    return async dispatch => {
        try {
            setLoading();
            const res = await fetch("/logs");
            const data = await res.json();
            dispatch({
                type: GET_LOGS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOG_ERROR,
                payload: error.response,
            });
        }
    };
};

export const addLogs = log => {
    return async dispatch => {
        try {
            setLoading();
            const res = await fetch("/logs", {
                method: "POST",
                body: JSON.stringify(log),
                headers: {
                    "Content-type": "application/json",
                },
            });
            const data = await res.json();
            dispatch({
                type: ADD_LOG,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOG_ERROR,
                payload: error.response,
            });
        }
    };
};

export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log,
    };
};

export const clearCurrent = () => {
    return { type: CLEAR_CURRENT };
};

export const editLog = log => async dispatch => {
    try {
        const res = await fetch(`/logs/${log.id}`, {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        dispatch({ type: UPDATE_LOG, payload: data });
    } catch (error) {
        dispatch({ type: LOG_ERROR, payload: error.response });
    }
};

export const deleteLog = id => async dispatch => {
    try {
        await fetch(`/logs/${id}`, {
            method: "DELETE",
        });
        dispatch({ type: DELETE_LOG, payload: id });
    } catch (error) {
        console.log(error);
        dispatch({ type: LOG_ERROR, payload: error.response });
    }
};

export const filterLog = text => {
    return {
        type: FILTER_LOG,
        payload: text,
    };
};

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER,
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
