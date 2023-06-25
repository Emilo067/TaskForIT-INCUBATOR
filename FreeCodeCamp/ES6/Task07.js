const sum = (...args) => {
    const args2 = args;
    let total = 0;
    for (let i = 0; i < args2.length; i++) {
        total += args2[i];
    }
    return total;
}