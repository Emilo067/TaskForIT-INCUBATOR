function accum(s) {
    // your code
    let firstChar = s[0].toUpperCase() + "-";
    let str = ""+firstChar;
    for (let i = 1; i < s.length; i++) {
        str+=s[i].toUpperCase();
         for(let j = 0; j < i; j++) {
             str += s[i].toLowerCase();
         }
         if(i == s.length - 1) {
             break;
         } else {
             str += "-";
         }
    }
    return str;
}


console.log(accum("ZpglnRxqenU"));