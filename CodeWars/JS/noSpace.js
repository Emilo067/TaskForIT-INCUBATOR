function noSpace(x){
    for(let i = 0; i < x.length; i++) {
      if(x[i] == " ") {
        x=x.replace(" ", "");
        i--;
      }
    }
     return x;
   }

   console.log(noSpace('sda awe sdf  dd'));