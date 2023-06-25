function sumMul(n,m){
//your idea here
    let sum = 0;
    if(m <= n) {
        return "INVALID";
    }
    for(let i = m - 1; i >= n; i--) {
        if(i % n == 0) {
            sum += i;
        }
    }
    return sum;
}