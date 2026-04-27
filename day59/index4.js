//აიღეთ რაიმე მასივი და გამოიტანეთ უდიდესი რიცხვი (რამე ფუნქცია არ გამოიყენოთ)
let numbers = [12, 45, 7, 89, 23];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);