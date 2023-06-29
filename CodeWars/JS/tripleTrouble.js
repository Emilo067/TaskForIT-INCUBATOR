function tripleTrouble(one, two, three){
    //Solution
    let s = '';
    for(let i = 0; i < one.length; i++) {
        s += one[i] + two[i] + three[i];
    }
    return s;
}


console.log(tripleTrouble('aa', 'bb', 'ss'));