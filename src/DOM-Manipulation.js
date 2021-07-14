
//make an object and write functions inside
//
const domUpdates = {

  render() {
    console.log('hi!')
    //write query selectors in methods
    //if using same qs in differnt methods, move it to global scope
  },

  renderStepCard() {

  },

  renderFriendCard(friends) {
    const friendCard = document.getElementById('friendCard');
    friendCard.innerHTML = '';
    friends.forEach(friend => {
    friendCard.innerHTML +=
    `  <div class="friend-display">
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
