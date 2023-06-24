function sortArray(a1, a2) {
let a = new Array();
for(let i = 0; i < a1.length; i++) {
    for(let j = 0; j < a2.length; j++) {
        if(a1[i].charAt(0) == a2[j].charAt(0)) {
        a.push(a2[j]);
        }
    }
}
return a;
}

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2))