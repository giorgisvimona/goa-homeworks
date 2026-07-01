// map მეთოდის გამოყენებით გაამრავლეთ ყველა რიცხვი ორზე: const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiply(num) {
    return num * 2;
}
const result = nums.map(multiply);
console.log(result);
// map მეთოდის გამოყენებით გახადეთ ყველა ასო დიდი ასო: const letters = ['a', 'b', 'c', 'd']; // => ['A', 'B', 'C', 'D']
const letters = ['a', 'b', 'c', 'd'];
function upper(letter) {
    return letter.toUpperCase();
}
const result = letters.map(upper);
console.log(result);
// map მეთოდის გამოყენებით ჩაამატეთ მასივში ყველა სიტყვის სიგრძე: const fruits = ["apple", "banana", "kiwi"] 
// // => [5, 6, 4]
const fruits = ["apple", "banana", "kiwi"];
function getLength(fruit) {
    return fruit.length;
}
const result = fruits.map(getLength);
console.log(result);
// map მეთოდის გამოყენებით ჩაამატეთ ახლა მასივში ყველა რიცხვის 10 პროცენტი: const prices = [100, 200, 300]
const prices = [100, 200, 300]
function procent(price){
    return price * 0.1
}
const result = prices.map(procent)
console.log(result)
// filter მეთოდის გამოყენებით მარტო შეინახეთ ლუწი რიცხვები: [1, 2, 3, 4, 5, 6] // => [2, 4, 6]
function even(num) {
    return num % 2 === 0;
}
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter(even);
console.log(result);
// filter მეთოდის გამოყენებით ახალ მასივში შეიტანეთ სიტყვები, რომელიც 4ზე მეტი ასოსგან შესდგება: const words = ["hi", "hello", "sun", "world"] // => ['hello', 'world']
function long(word) {
    return word.length > 4;
}
const words = ["hi", "hello", "sun", "world"];
const result = words.filter(long);
console.log(result);
// filter მეთოდის გამოყენებით გაფილტრეთ უარყოფითი მნიშვნელობები: const values = [0, 1, false, 2, "", 3, null, 4] // => [1, 2, 3, 4]
function truthy(value) {
    return value;
}
const values = [0, 1, false, 2, "", 3, null, 4];
const result = values.filter(truthy);
console.log(result);
