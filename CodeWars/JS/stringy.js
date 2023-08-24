function stringy(size) {
    // your code here
    let i = 1;
    let str = "";
    while(i <= size) {
        if(i % 2 !== 0) {
            str+="1";
        } else{
            str+="0";
        }
        i++;
    }
    return str;
}