const retrieveUserData = () => {
	return fetch('http://localhost:3001/api/v1/users')
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => console.log('USERS API Error'));
};

const retrieveHydrationData = () => {
	return fetch('http://localhost:3001/api/v1/hydration')
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => console.log('USERS API Error'));
};

const retrieveSleepData = () => {
	return fetch('http://localhost:3001/api/v1/sleep')
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => console.log('USERS API Error'));
};

const getData = () => {
	return Promise.all([
		retrieveUserData(),
		retrieveHydrationData(),
		retrieveSleepData(),
	]);
};

export default {
	getData,
};
