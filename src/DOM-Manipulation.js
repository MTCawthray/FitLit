//make an object and write functions inside
//
const domUpdates = {
	// user
	renderUserName(name) {
		const user = document.getElementById('nameAvatar');
		user.innerHTML = '';
		user.innerHTML += `
      <img src="./images/opposum-circle-avatar.png" alt="user icon" class="user-icon">
      <h4>${name}</h4>
    `;
	},

	renderFriendCard(friends) {
		const friendCard = document.getElementById('friendCard');
		friendCard.innerHTML = '';
		friends.forEach((friend) => {
			friendCard.innerHTML += `
        <div class="friend-display">
          <img src="./images/user.png" alt="friend icon">
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

	renderWeeklyOunces(weeklyOunces) {
		new Chart(document.getElementById('barChartHorizontal'), {
	    type: 'horizontalBar',
	    data: {
	      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
	      datasets: [
	        {
	          label: 'weekly ounces drank',
	          backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850', '#69D53E', '#69D53E'],
	          data: weeklyOunces
	        }
	      ]
	    },
	    options: {
	      legend: { display: false },
	      title: {
	        display: true,
	        text: ''
	      }
	    }
	});

	},

	// sleep

	renderTodaysSleepCard(hours, quality) {
		const todaySleepCard = document.getElementById('todayCard');
		todaySleepCard.innerHTML = '';
		todaySleepCard.innerHTML += `
			<article class="today-card-info">
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
			</article>`;
	},

	renderUserAvgSleepInfo(avgHours, avgQuality) {
		const userAvgSleepInfo = document.getElementById('userAvgSleepInfo');
		userAvgSleepInfo.innerHTML = '';
		userAvgSleepInfo.innerHTML += `
			<div>
				<h3>Avg Hours Slept</h3>
				<p>${avgHours}</p>
			</div>
			<div>
				<h3>Avg Sleep Quality</h3>
				<p>${avgQuality}</p>
			</div>`;
	},
};

//export object to call on in scripts.js
//
export default domUpdates;
