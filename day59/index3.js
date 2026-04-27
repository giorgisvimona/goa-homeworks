//აიღეთ ნებისმიერი მასივი რომელიც გამოიტანს ყველა რიცხვის ჯამს რაც მასივში არის მოცემული
let numbers = [3, 7, 2, 10, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);