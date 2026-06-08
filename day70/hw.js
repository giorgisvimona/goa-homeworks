// 1) დაწერე ფუნქცია სადაც გექნება 2 პარამეტრი name და lastname და გამოიტანე იგი ერთად.
function name(name, lastname) {
    return name + " " + lastname 
};

console.log(name("Giorgi", "svimonishvili"));
// 2) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული მასივი და უნდა დაითვალო მაგ რიცხვების ჯამი
function sum(arr) {
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
    return sum1;
}
// 3) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული რაიმე მასივი სადაც დადებითი რიცხვებიც 
// არის და უარყოფითი და შენი მიზანია დაითვალო დადებითის ჯამი და უარყოფითის ჯამი
function findsum(arr) {
    let positives = 0;
    let negatives = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives += arr[i];
        } else if (arr[i] < 0) {
            negatives += arr[i];
        }
    }
    return {
        positives,
        negatives
    };
}
// 4) დაწერე ფუნქცია სადაც პარამეტრად გექნება რაიმე მასივი და უნდა დითვალო კენტი და ლუწი 
// რიცხვების ჯამი ცალცალკე
function evenodd(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    return {
        even,
        odd
    };
}
console.log(evenodd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 5) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული ხილების მასივი და თუ ხილის ასოების რაოდენობა 
// მეტია 6 მაგ შემთხვევაში გამოიტანე იგი
function fruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].length > 6) {
            console.log(fruits[i]);
        }
    }
}
fruits(["Apple", "Banana", "Strawberry", "Kiwi", "ananas"]);
// 6) დაწერე ფუნქცია სადაც პარამეტრად გექნება 2 მასივი პირველი სადაც გექნება მარტო ლუწი რიცხვები და 
// მეორე სადაც იქნება უარყოფითი რიცხვები და შენი მიზანია დაითვალო მათი საერთო ჯამი.
function sum(even, negative) {
    let sum = 0;
    for (let i = 0; i < even.length; i++) {
        sum += even[i];
    }
    for (let i = 0; i < negative.length; i++) {
        sum += negative[i];
    }
    return sum;
}
console.log(sum([2, 4, 6, 67], [-6, -67, -13]));
// 7) ახსენი მთლიანად ფუნქცია თუ რა ნაწილებად იყოფა იგი.
// ფუნქცია არის კოდის ბლოკი რომელიც კონკრეტულ დავალებას ასრულებს
// function არის საკვანძო სიტყვა რომელიც ეუბნება JavaScriptს რო ვქმნით ფუნქციას
// მაგის მერე ვწერთ ფუნქციის სახელს რომლითაც მერე გამოვიძახებთ ფუნქციას
// სახელის შმდეგ ბრჩხილებში იწერება პარამეტრები ანუ მონაცემები
// შემდეგ უკვე ვწერთ ფუნქციის შიგნით კნაკლინ ფრჩხილებში ფუნქციის კოდს და ასევე ვაბრუნებთ ფუნქციას returnით
