//How would you check if a number is an integer?

function isInit(num) {
    return num % 1 == 0;

}
console.log(isInit(4));
console.log(isInit(4.5));
console.log(isInit(0.3));