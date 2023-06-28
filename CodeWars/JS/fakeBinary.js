function fakeBin(x){
    arr = '';
    for(let i = 0; i < x.length; i++) {
        if(x[i] >= 5) {
            arr += 1;
        } else {
            arr += 0;
        }
    }
    return arr;
}

console.log(fakeBin('45385593107843568'));