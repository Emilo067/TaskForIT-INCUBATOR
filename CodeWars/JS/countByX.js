function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++) {
        if(i % x === 0) {
            z.push(i);
        } else{
            n++;
        }
    }
    return z;
}

console.log(countBy(2, 5));