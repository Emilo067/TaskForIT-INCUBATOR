function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    var c = 0;
    if(sonYearsOld * 2 < dadYearsOld) {
    while(dadYearsOld / 2 != sonYearsOld) {
        dadYearsOld--;
        c++;
    }
    } else{
        while(dadYearsOld /2 != sonYearsOld) {
            dadYearsOld++;
            c++;
        }
    }
    return c;
}

