function findMultiples(integer, limit) {
    //your code here
    var array = new Array();
    var i = integer;
    var index = 0;
    while(integer <= limit) {
        if(integer % i == 0) {
            array.push(integer);
        }
        integer++
        index++;
    }
    return array;
}