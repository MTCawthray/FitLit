import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import Hydration from '../src/Hydration';
const sampleHydrationData = require('../src/data/sample-hydration');

describe('Hydration', () => {
  let hydrationRepo, userHydration;

  beforeEach(() => {
    hydrationRepo = new HydrationRepository(sampleHydrationData);
    userHydration = new Hydration(2, "2019/06/28", hydrationRepo);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of the hydtration class', () => {
    expect(userHydration).to.be.an.instanceOf(Hydration);
  });

  it('should hold user data', () => {
    expect(userHydration.userID).to.equal(2);
    expect(userHydration.date).to.equal("2019/06/28");
    expect(userHydration.numOunces).to.equal(null);
  });

  describe('calculateAvgOunces()', () => {
    it('should be a function', () => {
      expect(userHydration.calculateAvgOunces).to.be.a('function');
    });

    it('should calculate the average number of ounces for a user', () => {
      expect(userHydration.calculateAvgOunces()).to.equal(62);
    });
  });

  describe('findOuncesByDate()', () => {
    it('should be a function', () => {
      expect(userHydration.findOuncesByDate).to.be.a('function');
    });

    it('should return number of ounces for a specified user on a specified date', () => {
      expect(userHydration.findOuncesByDate()).to.equal(56);
    });
  });

  describe('findWeeklyOunces()', () => {
    it('should be a function', () => {
      expect(userHydration.findWeeklyOunces).to.be.a('function');
    });

    it('should return an array of ounces for 7 days', () => {
      expect(userHydration.findWeeklyOunces().length).to.equal(7);
      expect(userHydration.findWeeklyOunces()).to.deep.equal([58, 44, 33, 67, 27, 70, 56]);
    });
  });
});
