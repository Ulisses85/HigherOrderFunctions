var chai = require('chai');
var expect = chai.expect;
var twice = require('../lib/twice.js').twice;
var add = require ('../lib/binFunc.js').add;
var mul = require ('../lib/binFunc.js').mul;

describe('twice', function () {
    it('it is a func', function () {
        expect(twice).to.be.a('function');
    });
    it('takes one arguments', function () {
        expect(twice.length).to.equal(1);
    });
    it('twice(add) returns double', function () {
        var double = twice(add);
        expect(double(10)).to.equal(20);
    });
    it('twice(mul) returns double', function () {
        var multiply = twice(mul);
        expect(multiply(10)).to.equal(100);
    });
  });
