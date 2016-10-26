var chai = require('chai');
var expect = chai.expect;
var to = require('../lib/to.js').to;
var from = require('../lib/from.js').from;

describe('to', function () {
    it('it is a func', function () {
        expect(to).to.be.a('function');
    });
    it('returns incremental values staring from passed in arg value', function () {
        var index = to (from(1),3);
        expect(index()).to.equal(1);
        expect(index()).to.equal(2);
        expect(index()).to.equal(3);
        expect(index()).to.equal(undefined);
    });
});
