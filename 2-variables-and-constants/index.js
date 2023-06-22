var number1;
var number2;
var total;

number1 = 10;
number2 = 5;
total = number1 + number2;

console.log(total);



var a = 1;
console.log(a, typeof a);

a = 1.0;
console.log(a, typeof a);

a = "Bir";
console.log(a, typeof a);

a = ["Bir"];
console.log(a, typeof a);

a = [{"Bir" : 1}]
console.log(a, typeof a);



var my_name = "Osman";
console.log("Genel: ", my_name);

function test() {
    var my_name = "Kagan";
    var age = 23;
    console.log("Local: ", my_name);
    console.log("Yaş: ", age);
}

test();
//console.log("Yaş: ", age); // Age is not defined.