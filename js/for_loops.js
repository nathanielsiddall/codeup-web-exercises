



function showMultiplicationTable(x) {

    if (x === 0 ){
        return console.log("you can't divide by zero");
    }

    for (i = 1; i <= 10; i++)

        console.log(x * i);
}

function isEven(x) {


    if (x % 2 === 0){
        return(" is even")
    }
    else{
        return(" is odd")
    }
}

function evenOdd() {

    for (i = 1; i <= 10; i++) {
        var rando = Math.floor((Math.random() * 5000) + 1);

        console.log(rando + isEven(rando))
        return rando;
    }
}

function numberTriangle(x) {

    var num = " ";

    for (i = 1; i <= x; i++) {
        num = num + i;
        console.log(parseInt(num));
    }
}

function decrement() {
    for (i = 100; i > 0 ; i -= 5) {
        console.log(i);
    }
}


function fibonacci() {

    var a = 0;
    var b = 0;
    var c = 1;

    for (var i = 1; i <= 20; i++) {
        a = b + c;
        console.log(a);
        c = b;
        b = a;

    }
}

function bottle() {


    for (var i = 9999; i > 1; i--){

        x = i - 1;

      document.write( i + " bottles of beer on the wall " + i +
            " bottles of beer. take one down pass it around, " + x +
            " bottles of beer on the wall <br> <br> " );
    }

}

function isMultiple(x, y){

    if (x % y === 0){
        return true;
    }else {
        return false;
    }
}

function fizzBuzz() {

    for (var i = 1; i < 100; i++){

        if (isMultiple(i, 3) === true && isMultiple(i, 5) === true){
            console.log("fizz Buzz");

        }
            else if (isMultiple(i, 3) === true) {
               console.log("fizz");
            }

            else if (isMultiple(i, 5) === true){
                    console.log("buzz");
            }
                else {
                    console.log(i);
                }
    }
}

function integerSum(x){
    var x = 1;

    for(var i = 0; i <= x; i++){

        x = x + i;
        console.log("Current integer value: " + x);


    }
}












// showMultiplicationTable(3);
// evenOdd();
// numberTriangle(evenOdd());
// decrement();
// fibonacci();
// bottle();
// fizzBuzz();
integerSum(500);

