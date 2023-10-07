function neutralise(s1, s2) {
    // Here be dragons!
    let str = "";
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '+' && s2[i] === '+') {
            str += '+';
        } else if (s1[i] === '-' && s2[i] === "-") {
            str += '-'
        } else {
            str += '0'
        }
    }
    return str;
}


// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//
//     When positives and positives interact, they remain positive.
//     When negatives and negatives interact, they remain negative.
//     But when negatives and positives interact, they become neutral, and are shown as the number 0.

