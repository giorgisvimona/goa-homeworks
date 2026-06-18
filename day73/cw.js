//  1)  გამოიტანე რიცხვები  1-დან 10მდე while loop-ის გამოყენებით
let i = 1;

while (i < 10) {
    console.log(i);
    i++;
}
//  2) გამოიტანე რიცხვები 10დან 1მდე კლებადობიდთ(ორივეთი) 
let x = 10;

while (x >= 1) {
    console.log(x);
    x--;
}

for (let a = 10; a >= 1; a--) {
    console.log(a);
}
//  3)  გამოიტანე while  ციკლით სიტყვა hello 8 ჯერ
let b = 1;

while (b <= 8) {
    console.log("hello");
    b++;
}
//  4)დაითვალე 1 დან 10 მდე რიცხვთა ჯამი  for-ციკლით
let sum = 0;

for (let s = 1; s <= 10; s++) {
    sum += s;
}
console.log(sum);
//  5)გამოიტანე მხოლოდ კენტი რიცხვები 1 დან 100მდე(ორივე ციკლით)
let y = 1;

while (y <= 100) {
    console.log(y);
    y += 2;
}
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}