function doubleChar(str) {
    // Your code here
    let str2 = "";
    let i = 0;
    while(i < str.length) {
        str2+=str[i]+str[i];
        i++;
    }
    return str2;
}