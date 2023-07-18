var isSquare = function(n){
    return n<0 ? false : Math.sqrt(n)%1 === 0 || n === 0 ? true : false; // fix me
}