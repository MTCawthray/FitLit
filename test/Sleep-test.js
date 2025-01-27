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

	describe('calculateAvgQuality()', () => {
		it('should return the average sleep quality of a user', () => {
			expect(userSleep.calculateAvgQuality()).to.equal(3.1);
		});
	});

	describe('findHours()', () => {
		it('should find how many hours a user slept on a specific day', () => {
			expect(userSleep.findHours('2019/06/28')).to.equal(5.2);
		});
	});

	describe('findQuality()', () => {
		it('should find sleep quality of a user on a specific day', () => {
			expect(userSleep.findQuality('2019/06/28')).to.equal(4.9);
		});
	});

	describe('findWeeklyHours()', () => {
		it('should return user hours slept over a 7 day period', () => {
			const hours = [4.8, 8, 10.8, 9.7, 9.3, 9, 5.2];
			expect(userSleep.findWeeklyHours()).to.deep.equal(hours);
		});
	});

	describe('findWeeklyQuality()', () => {
		it("should return a user's sleep quality over a 7 day period", () => {
			const quality = [3.3, 4.9, 1, 1.3, 2.6, 1.3, 4.9];
			expect(userSleep.findWeeklyQuality()).to.deep.equal(quality);
		});
	});
});
