function arrayDiff(a, b) {
    const arr = [];
    if(b.length == 0) {
        return a;
    }
    OUTTER:
    for(let i = 0; i < a.length; i++) {
       for(let j = 0; j < b.length; j++) {
      if(a[i] == b[j]) {
        continue OUTTER;
      } 
      if(j == b.length - 1) {
        arr.push(a[i]);
      }
     }
    }
    return arr;
  }
  
  console.log(arrayDiff([8,8,-12,-20,-15,3,-5,2,20,7],[8,8]))