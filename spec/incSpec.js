var chai=require('chai');
var expect = chai.expect;
var inc =require('../lib/inc.js').inc;

//var identity=require('../lib/identity.js').identity

describe('inc using addf()',function() {
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

/*
describe('inc using identity()',function() {

    it('inc(2) to equal 3', function () {
        expect(inc(2)).to.equal(3);
    });

});*/
