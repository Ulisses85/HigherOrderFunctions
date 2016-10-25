
var chai  = require('chai');
var expect = chai.expect;
var add =  require('../lib/binFunc.js').add;
var sub =  require('../lib/binFunc.js').sub;
var mul =  require('../lib/binFunc.js').mul;

describe('add',function(){

    it('it is a func', function(){
        expect(add).to.be.a('function');
    });
    it('takes two arguments', function () {
      expect(add.length).to.equal(2);
    });
    it('returns 6 for 3,3', function () {
      expect(add(3,3)).to.equal(6);
    });
  });
  describe('sub',function(){
    it('it is a func', function(){
          expect(sub).to.be.a('function');
      });
      it('takes two arguments', function () {
        expect(sub.length).to.equal(2);
      });
      it('returns 3 for 6,3', function () {
        expect(sub(6, 3)).to.equal(3);
      });
    });
    describe('mul',function(){
      it('it is a func', function(){
            expect(mul).to.be.a('function');
        });
        it('takes two arguments', function () {
          expect(mul.length).to.equal(2);
        });
        it('returns 9 for 3,3', function () {
          expect(mul(3, 3)).to.equal(9);
        });
      });
