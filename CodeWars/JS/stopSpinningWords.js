function spinWords(string){
    //TODO Have fun :)
 let arr = string.split(' ');
 for(let i = 0; i < arr.length; i++) {
   if(arr[i].length >= 5) {
       let ar = arr[i].split('').reverse().join();
       arr.splice(i, ar);
   }
 }
 return arr.join();
}

//console.log(spinWords("Welcome"))

let arr = ["welcome", "common"]
console.log(arr[0])