function solution(str){
    let i = str.length-1;
    let arr = '';
    while(i >= 0) {
        arr+=str[i];
        i--;
    }
    return arr;
}