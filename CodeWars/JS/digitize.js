function digitize(n) {
  //code here
  n = String(n)
  let arr = n.split('').reverse()
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}