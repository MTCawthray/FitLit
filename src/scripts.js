// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
const userData = require('../src/data/users');

//task 1
//create an info card on the dashboard with name, friends, daily step goal, stride length.
let userRepo, newUser;


function makeRepo(id) {
  userRepo = new UserRepository(userData);
  newUser = new User(userRepo.findUser(id));
}

makeRepo(1);

function getName(id) {
  makeRepo(id)
  return newUser.name;
};

function getFriends(user) {
  let userFriends = user.friends;
  const returnName = userFriends.reduce((arr, friend) => {
    arr.push(userRepo.findUser(friend));
    return arr;
  }, []).map(friend => friend.name);
  return returnName;
};

function getStepGoal(user) {
  return user.dailyStepGoal;
}

function getStride(user) {
  return user.strideLength;
}

function getFirstName(user) {
  return user.findFirstName();
};

console.log(getFirstName(newUser));


//
