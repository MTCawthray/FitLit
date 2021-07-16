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
  }, 0)
  return Math.round(total / userDays.length);
}

}
//input- hydrationRepo.findUser(id)
//output- calculated number of ounces
//we want to assign a variable with the value of our input which is: hydrationRepo.findUser(id)
//then we need to iterate over that variable and access the numOunces key and add it all up.
//we need to return the accumulator divided by the array.lenghth

export default Hydration;
