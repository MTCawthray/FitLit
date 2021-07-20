import chart from '../src/Chart.js';

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
      <div class="step-info">
        <h3>Daily Step Goal</h3>
        <p class="steps-data">${goal}</p>
      </div>
      <div class="step-info">
        <h3>Avg User Step Goal</h3>
        <p class="steps-data">${avgGoal}</p>
      </div>
      <div class="step-info">
        <h3>Stride Length</h3>
        <p class="steps-data">${stride}</p>
      </div>
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
		chart.horizontalBar(weeklyOunces);
	},

	// sleep
	renderTodaysSleepCard(hours, quality) {
		const todaySleepCard = document.getElementById('todayCard');
		todaySleepCard.innerHTML = '';
		todaySleepCard.innerHTML += `
      <h3>Today</h3>
      <div class="sleep-info">
        <h3>Hours Slept</h3>
        <p>${hours}</p>
      </div>
      <div class="sleep-info">
        <h3>Sleep Quality</h3>
        <p>${quality}</p>
      </div>
    `;
	},

	renderWeeklySleepInfo(hours, quality) {
		chart.groupedBar(hours, quality);
	},

	renderUserAvgSleepInfo(avgHours, avgQuality) {
		const userAvgSleepInfo = document.getElementById('userAvgSleepInfo');
		userAvgSleepInfo.innerHTML = '';
		userAvgSleepInfo.innerHTML += `
			<h3>Average</h3>
      <div class="sleep-info">
				<h3>Hours Slept</h3>
				<p>${avgHours}</p>
			</div>
			<div class="sleep-info">
				<h3>Sleep Quality</h3>
				<p>${avgQuality}</p>
			</div>
    `;
	},
};

export default domUpdates;
