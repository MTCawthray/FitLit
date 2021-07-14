
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
      `
    })
  }

}


//export object to call on in scripts.js
//
export default domUpdates;
