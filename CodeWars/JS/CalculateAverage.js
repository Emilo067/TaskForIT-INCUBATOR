function findAverage(array) {
    // your code here
    if(array.length == 0) {
        return 0;
    } else{
        var i = 0;
        var sum = 0;
        while(i < array.length) {
            sum+=array[i];
            i++;
        }
        return sum/array.length;
    }
}
