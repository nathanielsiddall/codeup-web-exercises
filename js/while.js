
var x = 1;


while (x < 65536) {
    x *= 2;
    console.log(x);

}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do {
    console.log(allCones + " number of cones to sell")
    var purchase = Math.floor(Math.random() * 5) + 1;
    console.log(purchase + " cones sold");

    if (allCones === 0) {
        console.log("Yay i sold them all!!!")
    }

    if (allCones - purchase > 1 ){
        console.log(allCones + " number of cones left")
    }
        else {
            console.log("there are no cones left...")
        }

    allCones =  allCones - purchase;

} while (allCones > 0);
