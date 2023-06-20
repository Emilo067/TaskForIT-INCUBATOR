function getMiddle(s)
{
    var str;
    //Code goes here!
    if(s.length % 2 == 0) {
        str =  s.charAt((s.length/2 - 1)) + "" + s.charAt(s.length/2);
        return str;
    } else{
        str = s.charAt(s.length/2 - 0.5);
        return str;
    }
}

