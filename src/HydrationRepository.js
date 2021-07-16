class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  findUser(id) {
    if (this.data.id === id) {
      return this.data.find(user => user.id === id);
    }
  }
}

export default HydrationRepository;
