const { asyncWrapProviders } = require("async_hooks");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

console.log(fruits.length);
fruits.push("kiwi");

console.log((fruits[3]));

const fruitspop = fruits.pop();
console.log(fruitspop[fruitspop.length]);
