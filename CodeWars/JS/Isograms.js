function isIsogram(str){
    //...
    var i = 0;
    var j = 1;
    while(i < str.length) {
        while(j < str.length) {
            if(str[i] == str[j] || str[i].toUpperCase() == str[j]
                || str[i] == str[j].toUpperCase()) {
                return false;
            }
            j++;
                }
                i++;
        j = i + 1;
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))