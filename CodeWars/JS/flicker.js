function flickSwitch(arr) {
    let flick = true;

    return arr.map(a => a === "flick" ? flick = !flick : flick)

}

// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.