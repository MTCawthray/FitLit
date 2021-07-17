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
		console.log(foundHours.hoursSlept);
		return foundHours.hoursSlept;
	}

	// findQuality() {}
}

export default Sleep;
