"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


function sayHello() {


    return "hello " + myName;
}






/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */





/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "wayne";
var helloMessage = sayHello(myName);

console.log(helloMessage);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
 function isTwo(random) {
     if (random == 2){
         return true;
     }
     else {
         return false;
     }


}

console.log(isTwo(random));

console.log(random)


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

var tip;
function calculateTip(bill) {
   var percentage = prompt("what percentage do you want to use?");
        tip = (percentage / 100 ) * bill;


    return;
}
function tipcalc() {
    var bill = prompt("whats the total of your bill?");

    calculateTip(bill);

    var total = +tip + +bill;

    alert("the total of your bill is " + total);
    return;

}



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// tipcalc();
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount() {
   var price = prompt("what is the price?")
    var discount = prompt("what is the discount percentage")

    discount = (discount *.01) * price;
   console.log(discount)

    var total = price - discount;
   alert(total)



}

// applyDiscount()












var a = "this is a thing...";
var rando = Math.floor((Math.random() * 500) + 1);





function identity(a) {
    return a;
}





function isOdd() {

    console.log(rando);

    if (rando % 2 === 1) {

        console.log("is odd")
    }

    else {
        console.log("not odd")
    }

}


function isEven() {

    if (rando % 2 === 0){
        console.log("is even")
    }
    else{
        console.log("not even")
    }
}

function decrement() {
  var dec = -- rando;
  console.log (dec);
}

function hasSpaces() {
    var data = prompt("give me words")
    var space = data.indexOf(" ")
    console.log(space)
    if (space > -1) {
        alert("theses words have a space")
    } else {
        alert("these words ain't got no space")
    }
}

function isFive() {
    var five = rando === 5;
    alert("the number is equal to 5")
}

function square() {
    console.log(rando);
    var squared = rando * rando;
    console.log("the square of the random number is " + squared)
}

function cube() {
    console.log(rando);
    var cubed = rando * rando * rando;
    console.log("the cubed of the number is " + cubed)
}

function half() {
    console.log(rando);
    var halved = rando / 2;
    console.log(" half of the number is " + halved)
}

function double() {
    console.log(rando);
    var doubled = rando * 2;
    console.log("the double of the number is " + doubled)
}




// identity(a);
// isOdd();
// isEven();
// decrement()
// hasSpaces()
// isFive();
// square()
// cube();
// half();
double()
