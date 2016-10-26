var chai = require('chai');
var expect = chai.expect;
var fromTo = require('../lib/fromTo.js').fromTo;

describe('fromTo', function () {
    it('it is a func', function () {
        expect(fromTo).to.be.a('function');
    });
    it('takes two arguments', function () {
        expect(fromTo.length).to.equal(2);
    });
    it('returns incremental values staring from passed in arg1 value until arg2value', function () {
        var index=fromTo(0,3);
        expect(index()).to.equal(0);
        expect(index()).to.equal(1);
        expect(index()).to.equal(2);
        expect(index()).to.equal(undefined);

    });
    it('returns incremental values staring from passed in arg1 value until arg2value', function () {
        var index=fromTo(1,3);
        expect(index()).to.equal(1);
        expect(index()).to.equal(2);
        expect(index()).to.equal(undefined);
        expect(index()).to.equal(undefined);

    });

});

