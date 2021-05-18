import {
    ADD_LOG,
    GET_LOGS,
    LOG_ERROR,
    SET_CURRENT,
    SET_LOADING,
    CLEAR_CURRENT,
    UPDATE_LOG,
    DELETE_LOG,
    FILTER_LOG,
    CLEAR_FILTER,
} from "../action/types";
const initialState = {
    filter: null,
    logs: null,
    current: null,
    loading: false,
    error: null,
};

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case SET_LOADING:
            return { ...state, loading: true };

        case GET_LOGS:
            return { ...state, logs: action.payload, loading: false };

        case LOG_ERROR:
            return { ...state, error: action.payload };

        case ADD_LOG:
            return { ...state, logs: [...state.logs, action.payload] };

        case SET_CURRENT:
            return { ...state, current: action.payload };

        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log =>
                    log.id === action.payload.id ? action.payload : log
                ),
            };
        case CLEAR_CURRENT:
            return { ...state, current: null };

        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
            };

        case FILTER_LOG:
            return {
                ...state,
                filter: state.logs.filter(log => {
                    const text = new RegExp(`${action.payload}`, "gi");
                    return log.msg.match(text) || log.tech.match(text);
                }),
            };
        case CLEAR_FILTER:
            return { ...state, filter: null };
    }
};

export default logReducer;
