class Sleep {
	constructor(id, date, sleepRepo) {
		this.id = id;
		this.date = date;
		this.sleepQuality = null;
		this.hoursSlept = null;
		this.sleepRepo = sleepRepo;
	}

	calculateAvgHours() {
		const userInfo = this.sleepRepo.findUser(this.id);
		const total = userInfo.reduce((num, day) => {
			num += day.hoursSlept;
			return num;
		}, 0);
		return Math.round(((total / userInfo.length) * 10) / 10);
	}
}

export default Sleep;
