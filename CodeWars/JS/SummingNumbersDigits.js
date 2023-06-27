function sumDigits(number) {
    sum = 0;
    number = Math.abs(number);
    number = String(number);
    for(let i = 0; i < number.length; i++) {
        sum += +number[i];
    }
    return sum;
}


console.log(sumDigits(-32));
