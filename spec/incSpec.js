var chai=require('chai');
var expect = chai.expect;
var inc =require('../lib/inc.js').inc;
var add = require('../lib/binFunc').add;
//var identity=require('../lib/identity.js').identity

xdescribe('inc using addf()',function() {
    it('it is a func', function () {
        expect(inc).to.be.a('function');
    });
    it('inc(9)(1) should equal var i=9;++i', function () {
        var i=9;
        expect(inc(9)(1)).to.equal(++i);
    });
    it('inc(3)(1) should equal 4', function () {
        expect(inc(3)(1)).to.equal(4);
    });
});


xdescribe('inc using liftf()',function() {
    it('it is a func', function () {
        expect(inc).to.be.a('function');
    });
    it('inc(9)(1) should equal var i=9;++i', function () {
        var i=9;
        expect(inc(function (a,b){return a+b})(9)(1)).to.equal(++i);
    });
    it('inc(5)(1) should equal 6', function () {
        expect(inc(function (a, b) { return a + b; })(5)(1)).to.equal(6);});

})

describe('inc using curry()',function() {
    it('it is a func', function () {
        expect(inc).to.be.a('function');
    });

    it('inc(9)(1) should equal var i=9;++i', function () {
        var i=9;
        var incCurry = inc(add, 1);
        expect(incCurry(9)).to.equal(++i);});

    it('inc(5)(1) should equal 6', function () {
        var incCurry = inc(add, 1);
        expect(incCurry(5)).to.equal(6);});

})

