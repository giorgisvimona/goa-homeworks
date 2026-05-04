//1) Math გამოყენებით დაამრგვალეთ რიცხვი 9.5 round მეშვეობით.
let num = 9.5;
let x;
x = Math.round(num);
console.log(x)
//2) Math გამოყენებით დაამრგვალეთ რიცხვი 9.8 floor მეშვეობით.
let num2 = 9.8;
let x2;
x2 = Math.floor(num2);
console.log(x2)
//) Math გამოყენებით დაამრგვალეთ რიცხვი მეტობისკენ ceil მეშვეობით.
let num3 = 9.1;
let x3;
x3 = Math.ceil(num3);
console.log(x3);
// 4) Math გამოყენებით გამოიტანეთ რიცხვის კვადრატი ფესვიდან 49 sqrt მეშვეობით.
let num4 = 49;
let x4;
x4 = Math.sqrt(num4);
console.log(x4);
// 5) გაქვთ მოცემული მასივი [1,2,3,4,5,6,7,8,9,10]
// თუ რიცხვი ლუწია გამოიტანეთ მისი კუბი pow მეშვეობით.
let numbers = [1,2,3,4,5,6,7,8,9,10];
let x5;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    x5 = Math.pow(numbers[i], 3);
    console.log(x5);
  }
}