import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
const sampleUserData = require('../src/data/sample-users');

describe('User Repository', () => {
  let newUsers;

  beforeEach(() => {
    newUsers = new UserRepository(sampleUserData);
  });

    it('should be a function', function() {
        expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of a class', () => {
      expect(newUsers).to.be.an.instanceOf(UserRepository);
    });

    
});
