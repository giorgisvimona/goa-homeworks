//აიღეთ რაიმე მასივი და გამოიტანეთ უმცირესი რიცხვი (რამე ფუნქცია არ გამოიყენოთ)
let numbers = [12, 45, 7, 89, 23];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(min);