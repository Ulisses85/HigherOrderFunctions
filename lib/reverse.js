var add = require ('../lib/binFunc.js').add;
var mul = require ('../lib/binFunc.js').mul;
var sub = require ('../lib/binFunc.js').sub;

function reverse(bin) {

    return function (a,b) {
        return bin(b,a);
    }
}

module.exports={reverse}

