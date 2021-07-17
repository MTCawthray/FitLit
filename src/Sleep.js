class Sleep {
	constructor(id, date, data) {
		this.id = id;
		this.date = date;
		this.sleepQuality = null;
		this.hoursSlept = null;
		this.sleepRepo = data;
	}

	calculateAvgHours() {
		const userInfo = this.sleepRepo.findUser(this.id);
		const total = userInfo.reduce((num, day) => {
			num += day.hoursSlept;
			return num;
		}, 0);
		return Math.round((total / userInfo.length) * 10) / 10;
	}

	calculateAvgQuality() {
		const userInfo = this.sleepRepo.findUser(this.id);
		const total = userInfo.reduce((num, day) => {
			num += day.sleepQuality;
			return num;
		}, 0);
		return Math.round((total / userInfo.length) * 10) / 10;
	}

	findHours() {
		const foundHours = this.sleepRepo.data.find((user) => {
			if (user.date === this.date && user.userID === this.id) {
				return user;
			}
		});
		return foundHours.hoursSlept;
	}

	findQuality() {
		const foundQuality = this.sleepRepo.data.find((user) => {
			if (user.date === this.date && user.userID === this.id) {
				return user;
			}
		});
		return foundQuality.sleepQuality;
	}

	findWeeklyHours() {
		const foundUser = this.sleepRepo.findUser(this.id);
		const foundObj = foundUser.find((user) => user.date === this.date);
		const selection = foundUser.indexOf(foundObj) + 1;
		const foundWeek = foundUser.slice(selection - 7, selection);
		console.log(foundWeek.map((day) => day.hoursSlept));
		return foundWeek.map((day) => day.hoursSlept);
	}
}

export default Sleep;
