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
			<article class="today-card">
				<h3>Today</h3>
				<h3>Hours Slept</h3>
				<p>${hours}</p>
				<h3>Sleep Quality</h3>
				<p>${quality}</p>
			</article>`;
	},

	renderWeeklySleepInfo(hours, quality) {
		const weeklySleepCards = document.getElementById('weeklySleepCards');
		weeklySleepCards.innerHTML = '';
		weeklySleepCards.innerHTML += `
			<article>
				<h6>Mon</h6>
				<p>${hours[0]}</p>
				<p>${quality[0]}</p>
			</article>
			<article>
				<h6>Tue</h6>
				<p>${hours[1]}</p>
				<p>${quality[1]}</p>
			</article>
			<article>
				<h6>Wed</h6>
				<p>${hours[2]}</p>
				<p>${quality[2]}</p>
			</article>
			<article>
				<h6>Thu</h6>
				<p>${hours[3]}</p>
				<p>${quality[3]}</p>
			</article>
			<article>
				<h6>Fri</h6>
				<p>${hours[4]}</p>
				<p>${quality[4]}</p>
			</article>
			<article>
				<h6>Sat</h6>
				<p>${hours[5]}</p>
				<p>${quality[5]}</p>
			</article>
			<article>
				<h6>Sun</h6>
				<p>${hours[6]}</p>
				<p>${quality[6]}</p>
			</article>`
	}

};

//export object to call on in scripts.js
//
export default domUpdates;
