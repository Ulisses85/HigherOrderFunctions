var chai = require('chai');
var expect = chai.expect;
var liftf = require('../lib/liftf.js').liftf;

describe('liftf', function () {
    it('it is a func', function () {
        expect(liftf).to.be.a('function');
    });

    it('takes one arguments', function () {
        expect(liftf.length).to.equal(1);
    });

    it('liftf takes a function', function () {
        expect(typeof liftf()).to.equal('function');
    });

    it('returns 9 for 3,3', function () {
        expect(liftf(function (a, b) {
            return a * b;
        })(3)(3)).to.equal(9);
    });
});

