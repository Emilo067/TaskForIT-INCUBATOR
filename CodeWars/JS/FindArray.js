function findArray(arr1, arr2){
    // solution
    var arr3 = new Array();
    for(var i = 0; i < arr2.length; i++) {
        for(var j = 0; j < arr1.length; j++) {
            if (arr2[i] == j) {
                arr3.push(arr1[j]);
            }
                }
    }
    return arr3;
}


console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]));
