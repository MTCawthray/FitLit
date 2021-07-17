import { expect } from 'chai';
import Sleep from '../src/Sleep';
import SleepRepository from '../src/SleepRepository';
const sampleSleepData = require('../src/data/sample-sleep');

describe('Sleep', () => {
	let sleepRepo, userSleep;

	beforeEach(() => {
		sleepRepo = new SleepRepository(sampleSleepData);
		userSleep = new Sleep(2, '2019/06/28', sleepRepo);
	});

	it('should be a function', () => {
		expect(Sleep).to.be.a('function');
	});

	it('should be an instance of Sleep', () => {
		expect(userSleep).to.be.an.instanceOf(Sleep);
	});

	it('should hold user data', () => {
		expect(userSleep.id).to.equal(2);
		expect(userSleep.date).to.equal('2019/06/28');
		expect(userSleep.sleepQuality).to.equal(null);
		expect(userSleep.hoursSlept).to.equal(null);
		expect(userSleep.sleepRepo).to.deep.equal(sleepRepo);
	});

	describe('calculateAvgHours()', () => {
		it('should return the average sleep hours of a user', () => {
			expect(userSleep.calculateAvgHours()).to.equal(8);
		});
	});
});
