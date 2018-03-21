



function showMultiplicationTable(x) {

    if (x === 0 ){
        return;
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
    }
}

function numberTriangle() {

    var num = " ";

    for (i = 1; i <= 9; i++) {
        num = num + i;
        console.log(num);
    }
}

function decrement() {
    for (i = 100; i > 0 ; i -= 5) {
        console.log(i);
    }
}


howMultiplicationTable(1);
evenOdd();
numberTriangle();
decrement();


