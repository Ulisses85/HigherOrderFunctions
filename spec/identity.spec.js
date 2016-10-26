var chai=require('chai');
var expect=chai.expect;
var identity=require('../lib/identity').identity;

describe('identity',function(){

    it('it is a func', function(){
        expect(identity).to.be.a('function');
    })
    it('it takes on argument', function(){
        expect(identity.length).to.equal(1);
    })
    it('it returns the argument pased to it', function(){
        expect(identity('input')).to.equal('input');
    })
    it('it does not modify the argument passed to it', function(){
        expect(typeof identity(1)).to.equal('number');
    })
    it('it does not create new objects', function(){
        var myArray=[1,2,3];
        expect( identity(myArray)).to.equal(myArray);
    })


   })