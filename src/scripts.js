import './css/styles.css';
import './images/turing-logo.png';
import './images/opposum-circle-avatar.png';
import './images/shoe.png';
import './images/sleep.png';
import './images/user.png';
import './images/water.png';
import UserRepository from './UserRepository';
import User from './User';
import HydrationRepository from './HydrationRepository';
import Hydration from './Hydration';
import SleepRepository from './SleepRepository';
import Sleep from './Sleep';
// import chart from 'chart.js/auto'; //We are working on how to pass our weeklyOuncesData to this file..
import domUpdates from '../src/DOM-Manipulation';
import apiCalls from '../src/data/apiCalls';

let userRepo, newUser, hydrationRepo, userHydration, sleepRepo, userSleep;

//----event listeners----///
window.addEventListener('load', () => {
	loadApiCalls();
});

//---page load functions---//

function loadApiCalls() {
	apiCalls.getData().then((promise) => {
		let userData = promise[0].userData;
		let hydrationData = promise[1].hydrationData;
		let sleepData = promise[2].sleepData;
		let generateUser = () => Math.floor(Math.random() * userData.length);
		userRepo = new UserRepository(userData);
		newUser = new User(userRepo.findUser(generateUser()));
		hydrationRepo = new HydrationRepository(hydrationData);
		userHydration = new Hydration(newUser.id, '2019/06/28', hydrationRepo);
		sleepRepo = new SleepRepository(sleepData);
		userSleep = new Sleep(newUser.id, '2019/06/28', sleepRepo);
		loadUserInfo();
	});
}

// user
function loadUserInfo() {
	displayName(newUser);
	displayFriends(newUser);
	displayStepAnnouncements(newUser, userRepo);
	displayWelcome(newUser);
	displayTodaysOunces();
	displayWeeklyOunces();
	displayTodaysSleepCard();
	displayWeeklySleepInfo();
	displayUserAvgSleepInfo();
}

function displayWelcome(user) {
	const firstName = getFirstName(user);
	domUpdates.renderWelcome(firstName);
}

function displayName(user) {
	const name = getName(user);
	domUpdates.renderUserName(name);
}

function displayFriends(user) {
	const friends = getFriends(user);
	domUpdates.renderFriendCard(friends);
}

function displayStepAnnouncements(user, data) {
	const goal = getStepGoal(user);
	const stride = getStride(user);
	const avgGoal = data.findAvgStepGoal();
	domUpdates.renderStepAnnouncements(goal, avgGoal, stride);
}

// hydration
function displayTodaysOunces() {
	const ounces = getTodaysOunces();
	domUpdates.renderTodaysOunces(ounces);
}

function displayWeeklyOunces(chart) {
	const weeklyOuncesData = getWeeklyOunces();
	domUpdates.renderWeeklyOunces(weeklyOuncesData);
}

// sleep

function displayTodaysSleepCard() {
	const hoursSlept = getHoursSlept();
	const sleepQuality = getSleepQuality();
	domUpdates.renderTodaysSleepCard(hoursSlept, sleepQuality);
}

function displayWeeklySleepInfo() {
	const weeklyHoursSlept = getWeeklyHoursSlept();
	const weeklyQuality = getWeeklyQuality();
	const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
	domUpdates.renderWeeklySleepInfo(days, weeklyHoursSlept, weeklyQuality);
}

function displayUserAvgSleepInfo() {
	const avgHours = getAvgHours();
	const avgQuality = getAvgQuality();
	domUpdates.renderUserAvgSleepInfo(avgHours, avgQuality);
}

//---helper functions----//

// user functions
function getName(user) {
	return user.name;
}

function getFriends(user) {
	let userFriends = user.friends;
	const returnName = userFriends
		.reduce((arr, friend) => {
			arr.push(userRepo.findUser(friend));
			return arr;
		}, [])
		.map((friend) => friend.name);
	return returnName;
}

function getStepGoal(user) {
	return user.dailyStepGoal;
}

function getStride(user) {
	return user.strideLength;
}

function getFirstName(user) {
	return user.findFirstName();
}

// **being handled by method in displayStepAnnouncements
// function getAvgStepGoal(allUsers) {
// 	return allUsers.findAvgStepGoal();
// }

// hydration functions
function getTodaysOunces() {
	return userHydration.findOuncesByDate();
}

function getWeeklyOunces() {
	return userHydration.findWeeklyOunces();
}

// sleep functions

function getHoursSlept() {
	return userSleep.findHours();
}

function getSleepQuality() {
	return userSleep.findQuality();
}

function getWeeklyHoursSlept() {
	return userSleep.findWeeklyHours();
}

function getWeeklyQuality() {
	return userSleep.findWeeklyQuality();
}

function getAvgHours() {
	return userSleep.calculateAvgHours();
}

function getAvgQuality() {
	return userSleep.calculateAvgQuality();
}

//
