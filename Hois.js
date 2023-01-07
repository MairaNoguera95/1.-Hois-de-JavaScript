// 1.
var hello; // se declara la variable global
console.log(hello); // imprime indefinido porque la variable global solo estaba declarada sin ningun valor
hello = 'word'; // se inicializa la variable
// 2
var needle; // se declara la varialble global
needle= 'haystack'; // se le inicializa con valor
test(); // se invoca a la funcion
function test(){
    var needle;  // se declara la variable local
    needle= 'magnet'; // se inicializa con valor
    console.log(needle); // imprime el valor de la variable needle en la llamada de la funcion.
}
//3.
var brendan;   // se declaro la variable global
brendan = 'super cool'; //se declaro con valor
function print(){ // se declaro la funcion
    brendan = 'only okay';
    console.log(brendan);// no imprime porque no fue invocado a la funcion
}
console.log(brendan); // imprime el valor de la variable global
// 4.
var food; // se declara la variable global
food = 'chicken'; // se le asigna valor a la variable 
console.log(food); // imprime el valor de la variable
eat(); // se invoca la funcion declarativa que imprime como valor 'half-chicken'
function eat(){ //se declara la funcion
    var food; // se declara la variable local
    food= 'half-chicken';
    console.log(food); //imprime el valor de 'half-chiken'
    food = 'gone';
}

// 5.
var food; //se declaran las variable
var mean;// se declara la variable
mean(); //se llama a la funcion y no encuentra nada porque es una funcion expresiva y no funciona antes de ser declarada
console.log(food); //la variable food solo esta definida dentro de la funcion
var mean = function(){ // funcion expresiva
    var food; //varible local
    food= "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);//la variable solo esta dentro de la funcion como local

//  6.

var genre;// se declara la variable global
console.log(genre);//imprime indefinido porque aun no tiene valor
genre= "disco";// se le asigna valor a la variable
rewind(); //se llama a la funcion 
function rewind(){ //se declara la funcion
    var genre; // declara la variable local
    genre="rock";
    console.log(genre);// imprime el valor de genre "rock"
    genre = "r&b";
    console.log(genre);// imprime el segundo valor de genre "r&b"
}
console.log(genre);// imprime el valor de la variable global "disco"
//7.
var dojo;// se delara la variable global
dojo = "san jose";// se le asigna un valor
console.log(dojo);// imprime el valor de la variable
lear();// se llama a la funcion e imprime los valores
function lear(){
    var dojo;
    dojo = "seattle";
    console.log(dojo);//imprime seattle
    dojo = "burbank";
    console.log(dojo);// imprime burbank
}
// 8.
console.log(makeDojo("chicago",65));// se le pasa un argumento a la funcion
console.log(makeDojo("Berkeley",0));// se le pasa un argumento a la funcion
function makeDojo(name, students){// se declara la funcion con parametros
    const dojo ={};// se inicializa una variable const como objeto
    dojo.name= name;
    dojo.students = students;
    if(dojo.students >50){ 
        dojo.hiring = true;//muestra el mensaje de verdadero

    }
    else if(dojo.students <=0){
        dojo= "closed for now"// muestra un error porque la variable const no puede ser reasignada
    }
    return dojo;
}