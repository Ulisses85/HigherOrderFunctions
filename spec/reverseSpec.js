var chai = require('chai');
var expect = chai.expect;
var reverse = require('../lib/reverse.js').reverse;
var add = require ('../lib/binFunc.js').add;
var mul = require ('../lib/binFunc.js').mul;
var sub = require ('../lib/binFunc.js').sub;


describe('reverse', function () {
    it('it is a func', function () {
        expect(reverse).to.be.a('function');
    });
    it('takes one arguments', function () {
        expect(reverse.length).to.equal(1);
    });
    it('reverse(sub) returns double', function () {
        var revSub = reverse(sub);
        expect(revSub(3,10)).to.equal(7);
    });
    it('reverse(sub) returns double', function () {
        var revSub = reverse(sub);
        expect(revSub(10,100)).to.equal(sub(100,10));
    });});
