export const API_ACTIONS = {
    FEATCH_START: 'FEATCH_START_',
    FEATCH_SUCCESS: 'FEATCH_SUCCESS_',
    FEATCH_FAILURE: 'FEATCH_FAILURE_',
}

export const apiActions = {
    fetch: (endpoint, payload) => ({
        type: `${API_ACTIONS.FEATCH_START}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchSuccess: (endpoint, payload) => ({
        type: `${API_ACTIONS.FEATCH_SUCCESS}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchFailure: (endpoint, payload) => ({
        type: `${API_ACTIONS.FEATCH_FAILURE}${endpoint.toUpperCase()}`,
        payload
    }),
}