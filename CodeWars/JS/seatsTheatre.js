function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    let arr = Array.from(Array(nRows), () => new Array(nCols));
    for(let i =0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            arr[i][j] = 1;
        }
    }
    for(let i = 0; i < arr.length; i++) {

    }
    return arr;
}

console.log(seatsInTheater(30, 4, 0, 0))