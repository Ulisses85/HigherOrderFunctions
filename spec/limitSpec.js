var chai = require('chai');
var expect = chai.expect;
var limit = require('../lib/limit.js').limit;
var add = require ('../lib/binFunc.js').add;
var mul = require ('../lib/binFunc.js').mul;
var sub = require ('../lib/binFunc.js').sub;
var twice = require('../lib/twice.js').twice;

describe('limit', function () {
    it('it is a func', function () {
        expect(limit).to.be.a('function');
    });
    it('takes two arguments', function () {
        expect(limit.length).to.equal(2);
    });
    it('can run 5 times only', function () {
      var addLimit = limit(add,5);
        expect(addLimit(3,5)).to.equal(8);
    expect(addLimit(3,5)).to.equal(8);
    expect(addLimit(3,5)).to.equal(8);
    expect(addLimit(3,5)).to.equal(8);
    expect(addLimit(3,5)).to.equal(8);
    expect(addLimit(3,5)).to.equal(undefined);
});
  });
