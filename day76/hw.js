// let fruits = ['apple', 'banana', 'cherry']; - გამოიტანეთ პირველი და ბოლო ელემენტები
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]);
console.log(fruits[-1]);
// let items = [10, 20, 30, 40]; - გამოიტანეთ ელემენტების რაოდენობა'
let items = [10, 20, 30, 40];
console.log(items.length);
// let animals = ['cat', 'dog']; - დაამატეთ ჟირაფი სიის ბოლოში
let animals = ['cat', 'dog'];
animals.push('girafe');
console.log(animals);
// let numbers = [1, 2, 3]; - ამოშალეთ ბოლო ელემენტი მასივიდან
let numbers = [1, 2, 3];
numbers.pop();
console.log(numbers);
// let queue = ['Alice', 'Bob', 'Charlie']; - ამოშალეთ პირველი ელემენტი სიაში
let queue = ['Alice', 'Bob', 'Charlie'];
queue.shift();
console.log(queue);
// let colors = ['green', 'blue']; - დაამატეთ წითელი სიის დასაწყისში
let colors = ['green', 'blue'];
colors.unshift('red');
console.log(colors);
// let scores = [10, 20, 30]; - გამოიტანეთ ყველა ელემენტი სათითაოდ კონსოლში
let scores = [10, 20, 30];
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
// let names = ['Alice', 'Bob']; - მიიღეთ შედეგი: Hello Alice!, Hello Bob!
let names = ['Alice', 'Bob'];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}!`);
}
// let prices = [1, 2, 3]; - გაამრავლეთ ყველა ელემენტი ორზე
let prices = [1, 2, 3];
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i] * 2);
}
// let items = [5, 10, 15]; - დააჯამეთ ყველა რიცხვი მასივში
let items2 = [5, 10, 15];
let sum = 0;
for (let i = 0; i < items2.length; i++) {
    sum += items2[i];
}
console.log(sum);