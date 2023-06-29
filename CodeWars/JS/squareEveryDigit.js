function squareDigits(num){
   let n = String(num);
   let res = "";
   for(let i = 0; i < n.length; i++) {
       res+="" + Math.pow(n[i], 2);
   }
    return Number(res);
}


console.log(squareDigits(9119))