// const nums = [9, 30, 2, 68, 8, 9, 15, 47, 4.5, 6, 3, 2, 68, 2, 5, 78, 45, 3, 0]; მოცემულია მასივი,
//  დაწერეთ კოდი რომელიც ამოშლის გამეორებულ რიცხვებს მასივიდან
const nums = [9, 30, 2, 68, 8, 9, 15, 47, 4.5, 6, 3, 2, 68, 2, 5, 78, 45, 3, 0];
let nums2 = [];
for (let i = 0; i < nums.length; i++) {
    if (!nums2.includes(nums[i])) {
        nums2.push(nums[i]);
    }
}
console.log(nums2);
// const arr = ['a', 'b', 'c', 'd'], მოცემულია მასივი, შეაბრუნეთ ელემენტები და მასივი უკუღმა გამოიტანეთ 
// (d, c, b, a)
const arr = ['a', 'b', 'c', 'd'];
let nums3 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    nums3.push(arr[i]);
}
console.log(nums3);
// const nums = [1, 2, 3, 4, 5, 6, 7, 8]; მოცემული მასივის ყველა ელემენტის ჯამი გამოიტანეთ
const num = [1, 2, 3, 4, 5, 6, 7, 8];
let nums5 = 0;

for (let i = 0; i < num.length; i++) {
    nums5 += num[i];
}
console.log(nums5);
// აიღეთ ნებისმიერი რიცხვების მასივი, თუ რიცხვი იყოფა სამზე, მისი მნიშვნელობა გახდეს 3, თუ 5ზე იყოფა გახდეს 5
// სხვა შემთხვევაში 0
const nums6 = [5, 3, 10, 9, 67, 99, 15];
let result = [];
for (let i = 0; i < nums6.length; i++) {
    if (nums6[i] % 3 == 0) {
        result.push(3);
    } else if (nums6[i] % 5 == 0) {
        result.push(5);
    } else {
        result.push(0);
    }
}
console.log(result);
// აიღეთ ხილების მასივი, რომელიც დათვლის რამდენჯერ მეორდება კონკრეტული ხილი მასივში
const fruits = ["banana", "banana", "apple", "banana", "banana", "apple"];
let banana = 0;
let apple = 0;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "banana") {
        banana++;
    } else if (fruits[i] === "apple") {
        apple++;
    }
}

console.log(banana);
console.log(apple);