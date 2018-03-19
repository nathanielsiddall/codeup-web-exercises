
"use strict";

function color() {
    console.log("Hello from external Javascript");

    alert("welcome to my website!")

  var  colName = prompt("what is your favorite color?")

    alert("Great, " + colName + " is my favorite name too!")
}







var a =1;

var b = a++;

var c = ++a;

var d = "hello";

var e =false;

var perplexed;

perplexed + 2;

var price = 2.7;
price.toFixed(2);

var price = "2.7";
// price.toFixed(2);

isNaN(0);

isNaN(1);

isNaN(" ");

isNaN("string");

isNaN("0");

isNaN("1");

isNaN("3.145");

isNaN(Number.MAX_VALUE);

// isNaN(infinity);

isNaN("true");

isNaN(true);

isNaN("false");

isNaN(false);

// Nan == Nan;

!true;

!false;

!!true;

!!false;

!!0;

!!-0;

!!1;

!!-1;

!!0.1;

!! "Hello";

!! " ";

!!' ';

!!"false";

!!"0";

var sample = "hell Codeup";

console.log(sample);

sample.length;

sample = sample + "students";





function movies() {

    var perDay = 3;

    var merMaid = perDay * 3;

    var broBear = perDay * 5;

    var  hercules = perDay * 1;

    var total = hercules + broBear + merMaid;

    alert ("the total of the cost of all the movies are " + total )

}





function work() {
    var google = 400 * 6;
    var amazon = 380 * 4;
    var facebook = 350 * 10;
    var fujs = google + amazon + facebook;

     confirm(
        "you'll be making "
        +  fujs
    )

}


function student() {

    var classCap = false;

    var studentSched = true;

    if (classCap == false && studentSched == true) {

        alert("yay you can into classes niemsky!!")
    }

        else {
        alert("no class for you.")
    }

}


function purchase() {
    var purNum = 155;
    var exp = false;
    var prem = true;

        if ((purNum > 1 && exp == false) || prem && exp == false){
            alert("yes");
        }

            else {
                alert("no")
        }
}


function login() {

    var username = 'codeup';
    var password = 'notastrongpassword'

    var whiteSpace = password.indexOf(' ');

    var uName = password.includes(username);



   var pwLength = password.length;

    if (pwLength  <= 5 || pwLength > 20) {

        alert("your password is trash, yo.")
    }
    if (whiteSpace === 0 || whiteSpace === 18)

        alert("issues with whitespace")

    if (uName != false){

        alert("you cant use your username as part of the password")
    }

}



color();
movies();
work();
student();
purchase()
login()



















