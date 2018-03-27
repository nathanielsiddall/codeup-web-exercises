(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,



        getDiameter: function () {
            return this.radius * 2;
        },
        getArea: function () {
            return  Math.PI * (Math.pow(this.radius, 2))
        },






//******* console.log(circle);
//

     //    getArea: function (radius) {
     //    while (isNaN(radius)) {
     //       radius = prompt("that's not a number,  gimme a number")
     //    }
     //    return "the area of your circle " + Math.PI * (Math.pow(radius, 2));
     // },

//*********prompt(getArea());
//
// *****document.write(getArea(prompt("gimme a number")));

        logInfo: function (doRounding) {

            if (doRounding === true){
               console.log(Math.round(circle.getArea()/* + " " + circle.getDiameter()*/));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: ");

            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }

    };
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5,

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


})();