function nameShuffler(str){
    //Shuffle It
    let name = "";
    let lname = "";
    for(let i = 0; i < str.length; i++) {
      if(str[i] != " ") {
        name += str[i];
      }
      if(str[i] == " ") {
        for(let j = 0, str2=str.substring(i+1, str.length); j < str2.length; j++) {
        lname += str2[j];
        }
        break;
      }
    }
    return lname + " " + name;
  }

  console.log(nameShuffler('john McClane'))