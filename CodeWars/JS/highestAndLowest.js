function highAndLow(numbers){
    // ...
    arr = numbers.split(" ");
    let high = arr[0], low = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (Number(high) < Number(arr[i])) {
            high = arr[i];
        }
        if(Number(low) > Number(arr[i])) {
            low = arr[i];
        }
    }
    return high + ' ' + low;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
