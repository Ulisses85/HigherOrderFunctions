var chai  = require('chai');
var expect = chai.expect;
var identityf =  require('../lib/identityf.js').identityf;


describe('identityf',function(){

    it('it is a func', function(){
        expect(identityf).to.be.a('function');
    });
    it('takes two arguments', function () {
        expect(identityf.length).to.equal(1);
    });

    it('has a return value of type function', function () {
        expect(typeof identityf()).to.equal('function');
    });
});



/*    it('returns 6 for 3,3', function () {
 expect(identityf(3,3)).to.equal(6);
 });*//*

3. Write a function *identityf* that takes an argument and
returns a function that returns that argument.
    `var three = indentyf(3)`
    `three() // 3`*/