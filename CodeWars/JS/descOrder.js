function descendingOrder(n){
    //...
    let arr = Array.from(String(n), Number);
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let t = arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    return +arr.join('');
}