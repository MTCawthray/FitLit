
//make an object and write functions inside
//
const domUpdates = {

  renderUserName(name) {
    const user = document.getElementById('nameAvatar');
    user.innerHTML = '';
    user.innerHTML += `
    <img src=" " alt="user icon">
    <h4>${name}</h4>
    `;
  },

  renderFriendCard(friends) {
    const friendCard = document.getElementById('friendCard');
    friendCard.innerHTML = '';
    friends.forEach(friend => {
    friendCard.innerHTML +=
      `<div class="friend-display">
      <img src=" " alt="friend icon">
      <p>${friend}</p>
      </div>
      `;
    });
  },

  renderStepAnnouncements(goal, avgGoal, stride) {
    const goals = document.getElementById('stepAnnouncements') ;
    goals.innerHTML = '';
    goals.innerHTML += `
    <h3>Daily Step Goal</h3>
    <p class=" steps-data">${goal}</p>
    <h3>Avg User Step Goal</h3>
    <p class="steps-data">${avgGoal}</p>
    <h3>Stride Length</h3>
    <p class="steps-data">${stride}</p>
    `
  },

  renderWelcome(firstName) {
    const welcomeArea = document.getElementById('welcomeMessage');
    welcomeArea.innerText = `Welcome, ${firstName}!`;
  }

}


//export object to call on in scripts.js
//
export default domUpdates;
