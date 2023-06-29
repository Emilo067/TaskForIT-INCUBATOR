function disemvowel(str) {
    let s = '', c = 0;
    const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    OUTTER:
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(str[i] === arr[j]) {
                continue OUTTER;
            } else if(j === arr.length - 1) {
                s += str[i];
            }
        }
    }
    return s;
}


console.log(disemvowel("This website is for losers LOL!"))