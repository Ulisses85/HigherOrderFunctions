var chai=require('chai');
var expect = chai.expect;
var addf =require('../lib/addf.js').addf;

describe('addf',function(){
    it('it is a func', function(){
        expect(addf).to.be.a('function');
    });
    it('takes one arguments', function () {
      expect(addf.length).to.equal(1);
    });
    it('returns 6 for 3,3', function () {
      expect(addf(3)(3)).to.equal(6);
    });
});
