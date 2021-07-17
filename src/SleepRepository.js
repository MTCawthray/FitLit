class SleepRepository {
	constructor(data) {
		this.data = data;
	}

	findUser(id) {
		return this.data.filter((user) => user.userID === id);
	}

	findDate(date) {
		return this.data.filter((user) => user.date === date);
	}

	findAvgSleepQuality() {
		const userAvg = this.data
			.map((user) => user.sleepQuality)
			.reduce((num, quality) => {
				num += quality;
				return num;
			}, 0);
		return Math.round(userAvg / this.data.length);
	}
}

export default SleepRepository;
