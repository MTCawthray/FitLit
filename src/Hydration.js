class Hydration {
	constructor(id, date, data) {
		this.userID = id;
		this.date = date;
		this.numOunces = null;
		this.hydrationRepo = data;
	}

	calculateAvgOunces() {
		let userDays = this.hydrationRepo.findUser(this.userID);
		let total = userDays.reduce((ounces, day) => {
			ounces += day.numOunces;
			return ounces;
		}, 0);
		return Math.round(total / userDays.length);
	}

	findOuncesByDate() {
		let foundOunces = this.hydrationRepo.data.find((userDate) => {
			if (userDate.userID === this.userID && userDate.date === this.date) {
				return userDate;
			}
		});
		this.numOunces = foundOunces.numOunces;
		return foundOunces.numOunces;
	}

	findWeeklyOunces() {
		let foundUser = this.hydrationRepo.findUser(this.userID);
		let foundObj = foundUser.find((user) => user.date === this.date);
		let selection = foundUser.indexOf(foundObj) + 1;
		let foundWeek = foundUser.slice(selection - 7, selection);
		return foundWeek.map((day) => day.numOunces);
	}
}

export default Hydration;
