import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import Hydration from '../src/Hydration';
const sampleHydrationData = require('../src/data/sample-hydration');


describe('Hydration', () => {

  let hydrationRepo, userHydration;

  beforeEach(() => {
    hydrationRepo = new HydrationRepository(sampleHydrationData);
    userHydration = new Hydration(2, "2019/06/15");
  });

    it('should be a function', () => {
      expect(Hydration).to.be.a('function');
    });

    it('should be an instance of the hydtration class', () => {
      expect(userHydration).to.be.an.instanceOf(Hydration);
    });

    it('should hold user data', () => {
      expect(userHydration.userID).to.equal(2);
      expect(userHydration.date).to.equal("2019/06/15")
      expect(userHydration.numOunces).to.equal(null);
    });


});
