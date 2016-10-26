var chai = require('chai');
var expect = chai.expect;
var element = require('../lib/element.js').element;
var fromTo = require('../lib/fromTo.js').fromTo;

describe('element', function () {
    it('it is a func', function () {
        expect(element).to.be.a('function');
    });
    it('returns incremental values staring from passed in arg1 value until arg2value', function () {
        var testArray = [1,6,7,8,9,10];
        var elem= element(testArray,fromTo(0,3));
        expect(elem()).to.equal(1);
        expect(elem()).to.equal(6);
        expect(elem()).to.equal(7);
        expect(elem()).to.equal(undefined);
    });
  });
