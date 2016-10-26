function from(num){
var count=num;
return function(){
    return count++;

}
}

module.exports={from}