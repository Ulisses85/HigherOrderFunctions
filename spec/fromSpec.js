var chai = require('chai');
var expect = chai.expect;
var from = require('../lib/from.js').from;

describe('from', function () {
    it('it is a func', function () {
        expect(from).to.be.a('function');
    });
    it('takes two arguments', function () {
        expect(from.length).to.equal(1);
    });
    it('returns incremental values staring from passed in arg value', function () {
    var index=from(1);
        expect(index()).to.equal(1);
        expect(index()).to.equal(2);
        expect(index()).to.equal(3);

    });
    it('returns incremental values staring from passed in arg value', function () {
        var index=from(5);
        expect(index()).to.equal(5);
        expect(index()).to.equal(6);
        expect(index()).to.equal(7);

    });

});

