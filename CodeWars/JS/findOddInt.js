function findOdd(A) {
  //happy coding!
  let count = 0;
  let number = 0;
  for(let i = 0; i < A.length; i++) {
    for(let j = 0; j < A.length; j++) {
    if(A[i] == A[j]) {
      count++;
      number = A[i];
    }
  }
    if(count % 2 != 0) {
      return number;
    } else {
      count=0;
    }
  }
}

console.log(findOdd([1, 1, 2]))