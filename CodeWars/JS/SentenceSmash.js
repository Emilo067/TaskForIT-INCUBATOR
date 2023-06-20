function smash (words) {
    var str = "";
    for(var i = 0; i < words.length; i++) {
        if(str == "") {
            str += words[i];
        } else if(i == words.length - 1) {
            str += " " + words[i];
        }  else {
            str += " " + words[i];
        }

    }
    return str;
};