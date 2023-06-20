function validatePIN (pin) {
    //return true or false
    var i = 0;
    var c = 1;
    while (c <= pin.length - 1) {
        c++;
    }
    if (c == 4 || c == 6) {
        while (i < pin.length) {
            var c = parseInt(pin.charAt(i));
            if (isNaN(c) == true) {
                return false;
            }
            i++;
        }
        return true;
    } else {
        return false;
    }
}