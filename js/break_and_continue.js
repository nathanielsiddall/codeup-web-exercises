





function a(x) {
    return alert(x);
}   /*shortens the name required for alerts*/
function c(x) {
    return alert(x);
}   /*shortens the name required for confirms*/
function p(x) {
    return prompt(x);
}   /*shortens the name required for prompts*/
function colo(x) {
   return console.log(x);
}   /*Shortens the names required for console.logs*/

var userNum = p("gimme an odd number between 1 and 50");
var i = 1;

userNum = parseInt(userNum);

if  (userNum >= 50) {
    a(" i said under 50.");
}   else if (userNum % 2 === 0){
    a("i said odd");
}


while (i <= 50) {

    if (i % 2 == 1)
        if (userNum == i){
        colo("yikes! skipping number: " + userNum)
        } else {
        colo("heres an odd number:" + i)
        }

        i++;
}


