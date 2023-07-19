function XO(str) {
    //code here
    let countO = 0;
    let countX = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === 'o') {
            countO++;
        }
        if(str[i].toLowerCase() === 'x') {
            countX++;
        }
    }
    if(countO === 0 && countX===0) {
        return true;
    } else {
        return countO===countX;
    }
}