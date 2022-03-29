export const JOBS = 'jobs'
export const EMPLOYEES = 'employees'

export const USERS = 'users'

export const ENDPOINTS = {
    [JOBS]: {
        url: '/jobs',
        method: 'GET',
    },
    [EMPLOYEES]: {
        uri: 'employees',
        method: 'GET'
    },
    [USERS]: {
        url: '/users',
        method: 'GET',
    },
}
