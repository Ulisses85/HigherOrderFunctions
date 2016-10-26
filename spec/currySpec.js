
var chai = require('chai');
var expect = chai.expect;
var curry = require('../lib/curry.js').curry;
var mul = require('../lib/binFunc.js').mul;
var add = require('../lib/binFunc.js').add;

describe('curry',function(){
  it('it is a func', function () {
    expect(curry).to.be.a('function');
    });
    it('takes two arguments', function () {
      expect(curry.length).to.equal(2);
    });
    it('should multiply two arguments', function () {
      var curriedMul = curry (mul, 6);
    expect(curriedMul(3)).to.equal(mul(3,6));
    });
  it('should add two arguments', function () {
    var curriedAdd = curry (add, 6);
    expect(curriedAdd(3)).to.equal(add(3,6));
  });
});
