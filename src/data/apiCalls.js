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