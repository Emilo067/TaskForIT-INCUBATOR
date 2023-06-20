function pipeFix(numbers){
    var i = numbers[0];
    var index = 0;
    var arr = new Array();

    while(i <= numbers[numbers.length - 1]) {
        arr.push(i);
        i++;
    }
    return arr;
}

