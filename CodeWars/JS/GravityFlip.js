const flip=(d, a)=> {
    //TODO
    if (d == 'R') {
        for (var i = 0; i < a.length - 1; i++) {
            for (var j = i+1; j < a.length; j++) {
                if (a[i] > a[j]) {
                    var temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        return a;
    } else {
        for (var i = 0; i < a.length - 1; i++) {
            for (var j = i + 1; j < a.length; j++) {
                if (a[i] < a[j]) {
                    var temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        return a;
    }
}


