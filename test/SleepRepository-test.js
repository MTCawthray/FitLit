import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';

describe('SleepRepository', () => {
    it('should be a function', function() {
        expect(SleepRepository).to.be.a('function');
    });
});