import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
// import userData from '../src/data/users';
import domUpdates from '../src/DOM-Manipulation';
import apiCalls from '../src/data/apiCalls';

let userRepo, userData, newUser, hydrationRepo, sleepRepo;

//----event listeners----///
window.addEventListener('load', () => {
    loadApiCalls();
});

// window.addEventListener('load', function() {
//     loadUserInfo(userRepo);
// });

//---page load functions---//

function loadApiCalls() {
    apiCalls.getData()
        .then((promise) => {
            // assignVariables(promise)
            userData = promise[0].userData;
            userRepo = new UserRepository(userData)
            newUser = new User(userRepo.findUser(5))
            console.log('userData', userData)
            console.log('newUser', newUser)
            loadUserInfo()
        })
}

// function assignVariables(data) {
//     userRepo = data[0];
//     newUser = new User(userRepo.findUser(5));
//     hydrationData = data[1];
//     sleepRepo = data[2];
//     loadUserInfo()
// };

function loadUserInfo() {
    // createUsers(userData);
    displayName(newUser);
    displayFriends(newUser);
    displayStepAnnouncements(newUser, userRepo);
    displayWelcome(newUser);
};

// function createUsers(data) {
//     userRepo = new UserRepository(data);
//     // console.log('create userRepo', userRepo)
//     newUser = new User(userRepo.findUser(5));
//     // console.log('newUser', newUser)
// };

function displayWelcome(user) {
    const firstName = getFirstName(user);
    domUpdates.renderWelcome(firstName);
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