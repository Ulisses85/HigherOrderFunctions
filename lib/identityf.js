function identityf(param){

    return function(param){
        return param;
    };
};

module.exports={identityf}