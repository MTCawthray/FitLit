// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
const sampleUserData = require('../src/data/sample-users');

//task 1
//create an info card on the dashboard with name, friends, daily step goal, stride length.

function getName(id) {
  let userRepo = new UserRepository(sampleUserData);
  let user = new User(userRepo.findUser(id));
  return user.name;
};

function getFriends(user) {
  return user.friends;
}


//
