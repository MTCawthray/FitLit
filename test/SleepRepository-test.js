import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';
const sampleSleepData = require('../src/data/sample-sleep');

describe('SleepRepository', () => {
	let sleepRepo;

	beforeEach(() => {
		sleepRepo = new SleepRepository(sampleSleepData);
	});

	it('should be a function', () => {
		expect(SleepRepository).to.be.a('function');
	});

	it('should be an instance of SleepRepository class', () => {
		expect(sleepRepo).to.be.an.instanceOf(SleepRepository);
	});

	it('should be able to hold data', () => {
		expect(sleepRepo.data).to.deep.equal(sampleSleepData);
	});

	describe('findUser()', () => {
		it('should return a specified user', () => {
			const user1 = sampleSleepData.filter((sample) => sample.userID === 1);
			expect(sleepRepo.findUser(1)).to.deep.equal(user1);
		});
	});

	describe('findDate()', () => {
		it('should return a group of users on a specified date', () => {
			const foundDate = [
				{
					userID: 1,
					date: '2019/06/28',
					hoursSlept: 7.6,
					sleepQuality: 4.7,
				},
				{
					userID: 2,
					date: '2019/06/28',
					hoursSlept: 5.2,
					sleepQuality: 4.9,
				},
				{
					userID: 3,
					date: '2019/06/28',
					hoursSlept: 4.3,
					sleepQuality: 3.7,
				},
			];

			expect(sleepRepo.findDate('2019/06/28')).to.deep.equal(foundDate);
		});
	});
});
