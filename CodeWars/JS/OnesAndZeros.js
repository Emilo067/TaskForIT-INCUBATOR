const binaryArrayToNumber = arr => {
    // your code
    var res = 0;
    var exponenta = arr.length - 1;
    for(var i = 0; i < arr.length; i++, exponenta--) {
        res += arr[i]*Math.pow(2, exponenta);
    }
    return res;
};


console.log(binaryArrayToNumber([1,1,1,1]))