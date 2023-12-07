console.log(example);
let example = "I'm the example!";

// console.log(example); example is not defined
// example = "I'm the example"

console.log(hello);
var hello = 'world';

// var hello;
// console.log(hello); undefined
// hello = "world"

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// var needle; // var se eleva al ser global

// function test() { //la funcion twat tambien se eleva 
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = "haystack"
// test(); 

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// var brendan; // se eleva al ser global
// function print() { // tambien se eleeva al ser global
//     brendan = 'only okay'; 
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


var food; //se eleva al ser global
function eat() { //tambien al ser una funcion
    var food; //se eleva al ser global
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
food = 'chiken';
eat();


mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

mean(); // aqui se detendra ya que mean() no es una funcion
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


var genre; // se eleva al ser global
function rewind() { //tambien la funcion 
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre); // undefined ya que solo se nombra pero no se define
genre = "disco";
console.log(genre); // aqui ya esta nombrado



dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


dojo = "san jose"; // aqui se detendra al no identificar "dojo"
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);




console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}



function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); // al no cumplir la condicion dojo solo se lee