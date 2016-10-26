function composeb(funA, funB){

    return function(c,d,e){
        return funB(funA(c,d),e);
    }
}

module.exports={composeb}