function mango(quantity, price){
    var i = quantity;
if(quantity < 3) {
    return quantity * price;
} else {
    while(i != 0) {
        if(i % 3 == 0) {
            quantity--;
        }
        i--;
    }
    return quantity * price;
}
}
