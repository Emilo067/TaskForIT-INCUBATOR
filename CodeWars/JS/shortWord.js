function findShort(s){
    const arr = s.split(' ');
    let countLowWord = arr[0].length;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length < countLowWord) {
            countLowWord = arr[i].length;
        }
    }
    return countLowWord;
}