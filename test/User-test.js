import { expect } from 'chai';
import User from '../src/User';
const sampleUserData = require('../src/data/sample-users');

describe('User', () => {
  let user1, user2;

  beforeEach(() => {
    user1 = new User(sampleUserData[1]);
    user2 = new User(sampleUserData[2]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should hold the user\'s id', () => {
    expect(user1.id).to.equal(2);
    expect(user2.id).to.equal(3);
  });

  it('should hold the user\'s name', () => {
    expect(user1.name).to.equal('Jarvis Considine');
    expect(user2.name).to.equal('Herminia Witting');
  });

  it('should hold the user\'s address', () => {
    expect(user1.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');

    expect(user2.address).to.equal('85823 Bosco Fork, East Oscarstad MI 85126-5660');
  });

  it('should hold the user\'s email', () => {
    expect(user1.email).to.equal('Dimitri.Bechtelar11@gmail.com');

    expect(user2.email).to.equal('Elwin.Tromp@yahoo.com');
  });

  it('should hold the user\'s stride length', () => {
    expect(user1.strideLength).to.equal(4.5);

    expect(user2.strideLength).to.equal(4.4);
  });

  it('should hold the user\'s daily step goal', () => {
    expect(user1.dailyStepGoal).to.equal(5000);

    expect(user2.dailyStepGoal).to.equal(5000);
  });

  it('should hold the user\'s friends', () => {
    expect(user1.friends).to.deep.equal([9, 18, 24, 19]);

    expect(user2.friends).to.deep.equal([19, 11, 42, 33]);

  });

});
