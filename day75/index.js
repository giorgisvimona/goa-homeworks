// 1) შექმენით ცარიელი სია და for loop გამოყენებით დაამატე რიცხვები 1-დან 20-მდე ცარიელ სიაში.
// 2) შექმენით მასივი სადაც გექნებათ რიცხვები 1-დან 20-მდე და დაამატეთ რაიმე სტრინგი და ამოშალეთ ბოლო ელემენტი.
let array = [];
for(let i = 1; i <= 20; i++){
    array.push(i);
}
array.push("gamarjoba");
array.pop();
console.log(array)
// 3) გაქვთ მოეცმული მასივი [1,2,3] და დაამატეთ დასაყსისში "Hello" შემდეგ დაამატეთ "python" და ბოლოს ამოშალეთ პირველი ელემენტი.
let arr = [1,2,3];
arr.unshift("hello");
arr.push("python");
arr.shift();
console.log(arr)
// 4) შექმენით ცარიელი სია და დაამატეთ ელემენტები 1-დან 20-მდე მხოლოდ ლუწი რიცხვები for loop გამოყენებით
// და ბოლოხ გამოიტანეთ კონსოლში ეს სია ოღონდ 2 ინდექსიდან 5-მდე.
let arr2 = [];
for(let i = 1; i <= 20; i++){
    if( i % 2 == 0) {
        arr2.push(i);
    }
}
console.log(arr2.slice(2,5));
// 5) შექმენით სია ["hello","world","js","html","css"] და დაამატეთ სიაში რაიმე სტრინგი  
// და ბოლოს შეამოწმეთ არის თუ არა "js" სიაში და თუ არის რომელ ინდექსზეა იგი.
let sia2 = ["hello","world","js","html","css"];
sia2.push("srting");
if(sia2.includes("srting")) {
    console.log(sia2.indexOf("srting"));
}else{
    console.log("araa siashi")
}

// 6) შექმენი სეტი სადაც გექნება 3 ელემენტი შემდგომ დაამატე სეტში "Hello"  ამოშალე რაიმე ელემენტი , 
// შეამოწმე არის თუ არა "js" სეტში და ბოლოს გაზომე სულ რამდენი ელმენეტია სეტში.
let set = new Set([1,2,3]);
set.add("Hello");
set.delete(3);
console.log(set.has("js"));
console.log(set.size);