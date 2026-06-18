// 1) ახსენი რა არის set?
// Set არის jsში მონაცემთა ტიპი რომელსაც არ გააჩნია ინდექსაცია გამოდის ელემენტები არეულად 
// ასევე სეტში არ ინახება დუპლიკატები და შეგვიძლია ელემენტი ჩავამტოთ ამოვშალოთ და ასე შემდეგ
// 2) როგორ უნდა შევქმნათ ცარიელი set?
let set = new Set();
// 3) რა განსხვავებაა python set-ს ჯავასკრიპტის სეტთან?
// ჯს ში განსხვავებულად იქმნება სეტი ასევე იწერება ჩვეულებრივ ფრჩხილებში და თუ გვინდა ბევრი ელემენტი ჩავწეროთ მაშინ ასეთ ფრჩხილებში([])
let set = new Set([1,2,3]);
// 4) შექმენი ცარიელი ცხოველების ცარიელი სეტი და დაამატე რამდენიმე ცხოველის სახელი და დაითვალე რამდენი 
// არის სულ (size).
let animals = new Set();

animals.add("dog");
animals.add("cat");
animals.add("munky");

console.log(animals.size);
// 5) გაქვთ მოცემული სეტი სადაც გაქვთ მოთამაშეების სახელები, ["Alex","Max","Charlz"] და თქვენი მიზანია რომ 
// თუ სეტში არის "Max" მაშინ გამოიტანე "მოთამაშე მოძებნილია" სხვა შემთხვევაში "ასეთი მოთამაშე არ არსებობს].
let names = new Set(["max","luka","gio"]);

if(names.has("max")){
    console.log("მოთამაშე მოძებნილია");
}
else{
    console.log("ასეთი მოთამაშე არ არსებობს");
}
// 6) გაქვთ მოცემული სეტი ["bmw","audi","mercedes"] ამოშალეთ mercedes და დაითვალეთ რამდენი ელემენტი გაქვთ 
// სეტში.
let cars = new Set(["bmw","audi","mercedes"]);
cars.delete("mercedes");
console.log(cars.size);
// 7) გაქვთ მოცემული ქულების სეტი [7,8,6,10,10,9,5]  დაითვალე რამდენი სხვადასხვა ქულა აქვს მოსწავლეს.
let scores = new Set([7,8,6,10,10,9,5]);
console.log(scores.size);
// 8) შექმენით ცარეილი სეტი nums შემდეგ for loop გამოყენებით სეტში დაამატეთ რიცხვები 1-დან 20-მდე მხოლოდ 
// ლუწები და აყვანილი იგი კუბში. და შეამოწმეთ არის თუ არა 121 სეტში.
let nums = new Set();

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        nums.add(i ** 3);
    }
}
console.log(nums);
console.log(nums.has(121));
// 9) გაქვთ მოცემული სეტი სადაც გაქვთ ["admin","moderator","user"] და შეამოწმე არის თუ არა სეტში admin  
// ან moderator თუ არის გამოიტანე "წვდომა დაშვებულია" სხვა შემთხვევაში "წვდომა აკრძალულია".
let people = new Set(["admin","moderator","user"]);
if(people.has("admin") || people.has("moderator")){
    console.log("წვდომა დაშვებულია");
}
else{
    console.log("წვდომა აკრძალულია");
}
// 10) შექმენით ხილების სეტი სადაც სეტი იქნბეა ცარიელი და დაამატეთ 5 ხილის სახელი შემდეგ ამოშალეთ იქიდან 
// "apple", შეამოწმეთ არის თუ არა სეტში "mango" და ბოლოს გამოიტანე სეტში ელემენტების რაოდენობა
let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("ananas");
fruits.add("orange");
fruits.add("mango");
fruits.delete("apple");

console.log(fruits.has("mango"));
console.log(fruits.size);