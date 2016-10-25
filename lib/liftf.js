function liftf(mul) {
    return function (a) {
        return function (b) {
            return mul(a, b);
        }
    }
}


module.exports = {
    liftf
}

