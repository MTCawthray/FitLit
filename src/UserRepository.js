class UserRepository {
  constructor(data) {
    this.data = data;
    console.log(this.data);
  }

  findUser(id) {
    return this.data.find(user => user.id === id);
  }

}

export default UserRepository;
