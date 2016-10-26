var chai=require('chai');
var expect = chai.expect;
var inc =require('../lib/inc.js').inc;
var add =require('../lib/binFunc').add;
//var identity=require('../lib/identity.js').identity

describe('inc using add()',function() {
    it('it is a func', function () {
        expect(add).to.be.a('function');
    });
    it('inc(1,2) should equal add(1,2)', function () {
        expect(inc(1,2)).to.equal(add(1,2));
    });
    it('returns 3 for 1,2', function () {
        expect(inc(1,2)).to.equal(3);
    });
});

/*
describe('inc using identity()',function() {

    it('inc(2) to equal 3', function () {
        expect(inc(2)).to.equal(3);
    });

});*/
