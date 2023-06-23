function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum) {
        return [];
    }
    const myArray = rangeOfNumbers(startNum + 1, endNum);
    myArray.unshift(startNum);
    return myArray;
};


console.log(rangeOfNumbers(1, 5))