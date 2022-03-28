export const JOBS = 'jobs'
export const EMPLOYEES = 'employees'

const ENDPOINTS = {
    [JOBS]: {
        url: '/jobs',
        method: 'GET',
    },
    [EMPLOYEES]: {
        uri: 'employees',
        method: 'GET'
    }
}

export default ENDPOINTS