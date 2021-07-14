

import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
import userData from '../src/data/users';
import domUpdates from '../src/DOM-Manipulation'


//----event listeners----///
window.addEventListener('load', loadFriends)


//task 1
//create an info card on the dashboard with name, friends, daily step goal, stride length.
let userRepo, newUser;
function sayHello() {
  console.log('hello');
}


// domUpdates.render();
//---helper functions----//

function makeRepo(data, id) {
  userRepo = new UserRepository(data);
  newUser = new User(userRepo.findUser(id));
}

function getName(data, id) {
  makeRepo(data, id)
  const name = newUser.name;
  domUpdates.renderName(name);
};

function getFriends(user) {
  let userFriends = user.friends;
  const returnName = userFriends.reduce((arr, friend) => {
    arr.push(userRepo.findUser(friend));
    return arr;
  }, []).map(friend => friend.name);
  return returnName;
};
makeRepo(userData, 2);
// console.log(getStride(newUser));

function getStepGoal(user) {
  return user.dailyStepGoal;
}

function getStride(user) {
  return user.strideLength;
}

function getFirstName(user) {
  return user.findFirstName();
};

function getAvgStepGoal(allUsers) {
  return allUsers.findAvgStepGoal();
}

//---page load functions---//
function loadFriends() {
  const friends = getFriends(newUser);
  domUpdates.renderFriendCard(friends);
  console.log(friends);
}

//
