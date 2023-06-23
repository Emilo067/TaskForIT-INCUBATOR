function countdown(n){
    if(n <= 0) {
        return [];
    }
    const myArray = countdown(n -1 );
    myArray.unshift(n);
    return myArray;
}

console.log(countdown(5));