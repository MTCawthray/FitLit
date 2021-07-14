

import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
import userData from '../src/data/users';
import domUpdates from '../src/DOM-Manipulation'


//----event listeners----///
window.addEventListener('load', () => {
  loadUserInfo(userData);
});

// window.addEventListener('load', loadName);



//---page load functions---//
let userRepo, newUser;
// let newUser = new User(userRepo.findUser(5));

function loadUserInfo(data) {
  createUsers(data);
  displayName(newUser);
  displayFriends(newUser);
}

function displayName(user) {
  const name = getName(user);
  domUpdates.renderUserName(name);
};

function displayFriends(user) {
  const friends = getFriends(user);
  domUpdates.renderFriendCard(friends);
};
// function loadName() {
// const name1 = getName();
// domUpdates.renderUserName(name1);
// console.log(name1);
// }

//task 1
//create an info card on the dashboard with name, friends, daily step goal, stride length.

// domUpdates.render();
//---helper functions----//

// function makeRepo(data, id) {
//   userRepo = new UserRepository(data);
//   newUser = new User(userRepo.findUser(id));
// }
function createUsers(data) {
  userRepo = new UserRepository(data);
  newUser = new User(userRepo.findUser(5));
}

function getName(user) {
  return user.name;
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


//
