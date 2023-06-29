function getCount(str) {
    const s = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < s.length; j++) {
            if(str[i] === s[j]) {
                count++;
            }
        }
    }
    return count;
}


console.log(getCount('abracadabra'));