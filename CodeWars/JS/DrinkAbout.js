function peopleWithAgeDrink(old) {
    if(old >= 21) {
        return "drink whisky";
    } else if(old < 21 && old >= 18) {
        return "drink beer";
    } else if(old  < 18 && old >= 14) {
        return "drink coke"
    } else {
        return "drink toddy"
    }
}