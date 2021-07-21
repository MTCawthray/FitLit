class UserRepository {
  constructor(data) {
    this.data = data;
  }

  findUser(id) {
    return this.data.find(user => user.id === id);
  }

  findAvgStepGoal() {
    let userAvg = this.data.map(user => user.dailyStepGoal).reduce((num, goal) => {
      num += goal;
      return num
    }, 0)
    return Math.round(userAvg / this.data.length);
  }
}

export default UserRepository;
