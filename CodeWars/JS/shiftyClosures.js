var name = 'Abe';
var greet_abe = function() {
    return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
    return "Hello, " + name + '!';
};

var sayHi = function(person) {
    return  "Привет, " + person ;
};
greet_abe()
