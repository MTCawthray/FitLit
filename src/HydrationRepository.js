class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  findUser(id) {
    return this.data.filter(user => user.userID === id);
  }

  findDate(date) {
    return this.data.filter(user => user.date === date);
  }
}

export default HydrationRepository;
