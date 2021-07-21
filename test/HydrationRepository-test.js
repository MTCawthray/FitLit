import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
const sampleHydrationData = require('../src/data/sample-hydration');

describe('HydrationRepository', () => {
  let hydrationRepo;

  beforeEach(() => {
    hydrationRepo = new HydrationRepository(sampleHydrationData);
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of a class', () => {
    expect(hydrationRepo).to.be.an.instanceOf(HydrationRepository);
  });

  it('should hold hydration data', () => {
    expect(hydrationRepo.data).to.deep.equal(sampleHydrationData);
  });

  describe('findUser()', () => {
    it('should be a function', () => {
      expect(hydrationRepo.findUser).to.be.a('function');
    });

    it('should return a specified user', () => {
      let specifiedUser1 = sampleHydrationData.filter(sample => sample.userID === 1);
      expect(hydrationRepo.findUser(1)).to.deep.equal(specifiedUser1);
    });
  });

  describe('findDate()', () => {
    it('should be a function', () => {
      expect(hydrationRepo.findDate).to.be.a('function');
    });

    it('should return an array of users on a specified date', () => {
      const foundDate = [
        { userID: 1, date: '2019/06/15', numOunces: 37 },
        { userID: 2, date: '2019/06/15', numOunces: 75 },
        { userID: 3, date: '2019/06/15', numOunces: 47 }
      ];
      expect(hydrationRepo.findDate("2019/06/15")).to.deep.equal(foundDate);
    });
  });
});
