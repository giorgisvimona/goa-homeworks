// გაქვთ მასივი: const prices = [17, 18, 20, 78, 5, 90], 
// map მეთოდის გამოყენებით გადაიყვანეთ ყველა ელემენტი ფასებში, მაგ: '$17', '$18'...
const prises = [17, 18, 20, 78, 5, 90];
function dolar(price) {
  return `$${price}`;
}
const prises2 = prises.map(dolar);
console.log(prises2);
// გაქვთ მასივი: const users = ['vip', 'regular', 'regular', 'vip', 'vip']. filter-ის გამოყენებით, 
// თუ მომხმარებელი vip არის ჩაამატეთ მასივში
const users = ['vip', 'regular', 'regular', 'vip', 'vip'];
function name(user) {
  return user === 'vip';
}
const vip = users.filter(name);
console.log(vip);
// გაქვთ მასივი: const paycheck = [25.60, 5.75, 120.00, 60.00]. reduce-ის გამოყენებით დააჯამეთ ყველარიცხვი
const paycheck = [25.60, 5.75, 120.00, 60.00];
function name2(total, money) {
  return total + money;
}
const sum = paycheck.reduce(name2);
console.log(sum);
// გაქვთ მასივი:
// const users = [
//     {id: 1, name: "gio", email: "example1@email.com"},
//     {id: 2, name: "luka", email: "example2@yahoo.com"},
//     {id: 3, name: "tako", email: "example3@email.com"}
// ]
// map ის გამოყენებით გამოიტანეთ მხოლოდ ემაილები
const users2 = [
    {id: 1, name: "gio", email: "example1@email.com"},
    {id: 2, name: "luka", email: "example2@yahoo.com"},
    {id: 3, name: "tako", email: "example3@email.com"}
];
function onlyemail(user) {
    return user.email;
}
const emil = users2.map(onlyemail);
console.log(emil);