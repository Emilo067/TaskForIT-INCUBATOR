function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    classPoints.push(yourPoints);
    let sum = 0;
    for(let i = 0; i < classPoints.length; i++) {
        sum+=classPoints[i];
    }

    sum/=classPoints.length;

    return yourPoints > sum;
}


console.log(betterThanAverage([2,3], 5));