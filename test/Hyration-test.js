import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    });
});