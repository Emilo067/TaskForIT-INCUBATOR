function billboard(name, price = 30){
    let cost = 0;
    let i = 0;
    while(i < name.length) {
        cost+=price;
        i++;
    }
    return cost;
}

console.log(billboard("Simon Eadwulf"))