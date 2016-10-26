var chai = require('chai');
var expect = chai.expect;
var composeb = require('../lib/composeb.js').composeb;
var add = require ('../lib/binFunc.js').add;
var mul = require ('../lib/binFunc.js').mul;
var sub = require ('../lib/binFunc.js').sub;
var twice = require('../lib/twice.js').twice;

describe('composeb', function () {
    it('it is a func', function () {
        expect(composeb).to.be.a('function');
    });
    it('takes two arguments', function () {
        expect(composeb.length).to.equal(2);
    });
    it('composeb(add ,mul)(5,5,8) returns 80', function () {
      //  var multiply = twice(mul);
      //  var double = twice(add);
        expect(composeb(add,mul)(5,5,8)).to.equal(80);
    });
    it('composeb(mul ,add)(5,5,8) returns 33', function () {
        //  var multiply = twice(mul);
        //  var double = twice(add);
        expect(composeb(mul ,add)(5,5,8)).to.equal(33);
    });

});


/*
it('composeu returns 100 double, multiply', function () {
    var multiply = twice(mul);
    var double = twice(add);
    expect(composeu(double ,multiply) (5)).to.equal(100);
});
it('composeu returns 50 for multiply, double', function () {
    var multiply = twice(mul);
    var double = twice(add);
    expect(composeu(multiply, double) (5)).to.equal(50);
});*/
