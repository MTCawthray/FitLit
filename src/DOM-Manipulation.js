//make an object and write functions inside
//
const domUpdates = {
	// user
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
		friends.forEach((friend) => {
			friendCard.innerHTML += `<div class="friend-display">
      <img src=" " alt="friend icon">
      <p>${friend}</p>
      </div>
      `;
		});
	},

	renderStepAnnouncements(goal, avgGoal, stride) {
		const goals = document.getElementById('stepAnnouncements');
		goals.innerHTML = '';
		goals.innerHTML += `
      <h3>Daily Step Goal</h3>
      <p class="steps-data">${goal}</p>
      <h3>Avg User Step Goal</h3>
      <p class="steps-data">${avgGoal}</p>
      <h3>Stride Length</h3>
      <p class="steps-data">${stride}</p>
    `;
	},

	renderWelcome(firstName) {
		const welcomeArea = document.getElementById('welcomeMessage');
		welcomeArea.innerText = `Welcome, ${firstName}!`;
	},

	// hydration
	renderTodaysOunces(ounces) {
		const ouncesDrank = document.getElementById('ouncesDrank');
		ouncesDrank.innerText = `${ounces}`;
	},

	renderWeeklyOunces(ounces) {
		const weeklyOunces = document.getElementById('weeklyOunces');
		weeklyOunces.innerHTML = '';
		weeklyOunces.innerHTML += `
      <h6>Mon: <span>${ounces[0]} oz</span></h6>
      <h6>Tue: <span>${ounces[1]} oz</span></h6>
      <h6>Wed: <span>${ounces[2]} oz</span></h6>
      <h6>Thu: <span>${ounces[3]} oz</span></h6>
      <h6>Fri: <span>${ounces[4]} oz</span></h6>
      <h6>Sat: <span>${ounces[5]} oz</span></h6>
      <h6>Sun: <span>${ounces[6]} oz</span></h6>
    `;
	},

// sleep

	renderTodaysSleepCard(hours, quality) {
		const todaySleepCard = document.getElementById('todayCard');
		todaySleepCard.innerHTML = '';
		todaySleepCard.innerHTML += `
			<h3>Today</h3>
			<h3>Hours Slept</h3>
			<p>${hours}</p>
			<h3>Sleep Quality</h3>
			<p>${quality}</p>`;
	}

};

//export object to call on in scripts.js
//
export default domUpdates;
