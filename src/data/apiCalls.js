import { assignVariables, loadUserInfo } from '../src/scripts'

const retrieveUserData = () => {
    return fetch('http://localhost:3001/api/v1/users')
        .then(response => response.json())
        .catch(err => console.log('USERS API Error'))
}

const retrieveHydrationData = () => {
    return fetch('http://localhost:3001/api/v1/hydration')
        .then(response => response.json())
        .catch(err => console.log('USERS API Error'))
}

const retrieveSleepData = () => {
    return fetch('http://localhost:3001/api/v1/sleep')
        .then(response => response.json())
        .catch(err => console.log('USERS API Error'))
}

const getData = () => {
    return Promise.all([retrieveUserData, retrieveHydrationData, retrieveSleepData])
        .then(data => assignVariables(data))
        .then(() => loadUserInfo())
}


export default {
    retrieveUserData,
    retrieveHydrationData,
    retrieveSleepData
};