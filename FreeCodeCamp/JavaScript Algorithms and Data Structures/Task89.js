// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank",
        "":undefined
    };
    result = lookup[val];
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");