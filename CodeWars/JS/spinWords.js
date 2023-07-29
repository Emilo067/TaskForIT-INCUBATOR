function spinWords(string){
    //TODO Have fun :)
    let s = '';
    let arr = string.split(' ');
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length >= 5) {
        for(let j = arr[i].length-1; j >= 0; j--) {
          s+=arr[i][j];
        }
        s+=" "
      } else {
        s+= arr[i] + " ";
      }
    }
    return s.trim();
  }

  console.log(spinWords("This is a test"));