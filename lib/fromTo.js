function fromTo(a,b){
    var startCount=a;
    var maxCount=b;

    return function(){
        if(startCount<maxCount){
        return startCount++;
        }

    }
}

module.exports={fromTo}