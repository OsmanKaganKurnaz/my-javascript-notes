/*

function test() {
    ...
    test();
    ...
}

*/

// normal function

function getFactorialNormal(number) {
    factorial = 1;

    if (number < 0) {
        return "Hatalı sayı girdiniz...";
    } else {
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }

}

console.log("* Normal Function Outputs *")
console.log(getFactorialNormal(5));
console.log(getFactorialNormal(0));
console.log(getFactorialNormal(-10));


// recursive function

const getFactorialRecursive = function (number) {

    if (number < 0) {
        return "Hatalı sayı girdiniz...";
    } else if (number == 0) {
        return 1;
    } else {
        return (number * getFactorialRecursive(number - 1));
    }
}

console.log("* Recursive Function Outputs *")
console.log(getFactorialRecursive(5));
console.log(getFactorialRecursive(0));
console.log(getFactorialRecursive(-10));