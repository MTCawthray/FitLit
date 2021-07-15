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

//---page load functions---//

let userRepo, newUser;

function loadUserInfo(data) {
  createUsers(data);
  displayName(newUser);
  displayFriends(newUser);
  displayStepAnnouncements(newUser, userRepo)
};

function displayName(user) {
  const name = getName(user);
  domUpdates.renderUserName(name);
};

function displayFriends(user) {
  const friends = getFriends(user);
  domUpdates.renderFriendCard(friends);
};

function displayStepAnnouncements(user, data) {
  const goal = getStepGoal(user);
  const stride = getStride(user);
  const avgGoal = data.findAvgStepGoal();
  domUpdates.renderStepAnnouncements(goal, avgGoal, stride);
};

//---helper functions----//

function createUsers(data) {
  userRepo = new UserRepository(data);
  newUser = new User(userRepo.findUser(5));
};

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

function getStepGoal(user) {
  return user.dailyStepGoal;
};

function getStride(user) {
  return user.strideLength;
};

function getFirstName(user) {
  return user.findFirstName();
};

function getAvgStepGoal(allUsers) {
  return allUsers.findAvgStepGoal();
};


//
