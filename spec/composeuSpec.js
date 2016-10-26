var chai = require('chai');
var expect = chai.expect;
var composeu = require('../lib/composeu.js').composeu;
var add = require ('../lib/binFunc.js').add;
var mul = require ('../lib/binFunc.js').mul;
var sub = require ('../lib/binFunc.js').sub;
var twice = require('../lib/twice.js').twice;

describe('composeu', function () {
    it('it is a func', function () {
        expect(composeu).to.be.a('function');
    });
    it('takes two arguments', function () {
        expect(composeu.length).to.equal(2);
    });
    it('composeu returns 100 double, multiply', function () {
        var multiply = twice(mul);
        var double = twice(add);
        expect(composeu(double ,multiply) (5)).to.equal(100);
    });
    it('composeu returns 50 for multiply, double', function () {
        var multiply = twice(mul);
        var double = twice(add);
        expect(composeu(multiply, double) (5)).to.equal(50);
    });
  });
