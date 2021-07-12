import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
const sampleUserData = require('../src/data/sample-users');

describe('User Repository', () => {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepository(sampleUserData);
  });

    it('should be a function', function() {
        expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of a class', () => {

      expect(userRepo).to.be.an.instanceOf(UserRepository);
    });

    it('should have a property that holds all user data', () => {
      expect(userRepo.data).to.deep.equal(sampleUserData);
    });

    describe('findUser()', () => {

      it('should be a function', () => {
        expect(userRepo.findUser).to.be.a('function');
      });

      it('should take in a parameter of userId and return that user\'s data', () => {
        expect(userRepo.findUser(1)).to.deep.equal(sampleUserData[0]);
      });

    })

    describe('findAvgStepGoal()', () => {

      it('should be a function', () => {
        expect(userRepo.findAvgStepGoal).to.be.a('function');
      });

      it('should return a number that is the average step goal of all users', () => {
        expect(userRepo.findAvgStepGoal()).to.equal(6667)
      });

    })
});
