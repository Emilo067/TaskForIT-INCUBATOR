function position(letter){
//Write your own Code!
    i= (letter.charCodeAt(0)-97) + 1;
    return "Position of alphabet: " + i;
}


console.log(position('e'))