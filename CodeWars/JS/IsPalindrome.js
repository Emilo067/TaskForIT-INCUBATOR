function isPalindrome(x) {
    // your code here
    var x2 = "";
    for(var i = x.length - 1; i >= 0; i-- ) {
        x2+=x[i];
    }
    return x.toLowerCase()==x2.toLowerCase();
}

var x2 = "hello", x1 = "olleh"
console.log(isPalindrome("hello"))