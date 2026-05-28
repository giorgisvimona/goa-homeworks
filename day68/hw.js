// შექმენით ფუნქცია, რომელიც დააბრუნებს "Hello World"-ს
function hellowrord(){
    return "hello word";
}
// შექმენით ფუნქცია, გადააწოდეთ არგუმენტი name. ფუნქციამ უნდა დააბრუნოს მაგალითად: "Hello Gio"
function me(name){
    return "hello" + name
}
console.log(me("gio"))
// შექმენით ფუნქცია, გადააწოდეთ არგუმენტი number. ფუნქციამ უნდა დააბრუნოს გაორმაგენული number
function twice(number){
    return number*2;
}
console.log(twice(200))
// შექმენით ფუნქცია, გადააწოდეთ width, height (სიგანე, სიმაღლე). შემდეგ კი გამოთვალეთ ფართობი (w * h)
function s(width, height){
    return width * height;
}
console.log(s(5, 3))
// შექმენით ფუნქცია, გადააწოდეთ პარამეტრი temperature. თუ ტემპერატურა 30-ზე მეტია დააბრუნოს true, სხვა შემთხვევაში false
function temp(temperature){
    if(temperature > 30){
        return "true"
    }else{
        return "false"
    }
}
// შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს, და უნდა დააბრუნოს მხოლოდ ლუწი რიცხვები
// ფუნქცია რომელიც აბრუნებს მხოლოდ ლუწ რიცხვებს
function evennums(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(evennums([1,2,3,4,5,6,7,8,9]));
// შექმენით ფუნქცია რომელიც მიიღებს არგუმენტს age, თუ ასაკი ნაკლებია 18-ზე, დააბრუნეთ "too young", თუ ასაკი მეტია 18ზე, დააბრუნეთ "come in"
function srulwlovani(age){
    if(age < 18){
        return "to young"
    }else if(age >= 18){
        return "come in"
    }
}
console.log(srulwlovani(55))
// შექმენით ობიექტი cat, გადააწოდეთ მას სახელი, ასაკი და მეგობრულია? (boolean)
const cat= {
    name: "cat",
    age: "10",
    frendly: false
}
// შექმნილი ობიექტიდან სათითაოდ დააბრუნეთ ყველა მნიშვნელობა
console.log(cat.name);
console.log(cat.age);
console.log(cat.frendly);
// შექმენი ობიექტი სახელად car (მანქანა) შემდეგი თვისებებით (properties): model (მოდელი) და year (წელი). დაწერე console.log ბრძანება, რომელიც ამ თვისებების გამოყენებით დაბეჭდავს სრულ წინადადებას, მაგალითად: "მე  ვატარებ 2018 წლის Honda Civic-ს."
const car = {
    model: "honda vezel",
    year: "2014" 
}
console.log(`მე ვატარებ ${car.year} წლის ${car.model}-ს`)
// დაწერე ფუნქცია სახელად describePet, რომელიც პარამეტრად მიიღებს ობიექტს (ისეთ ობიექტს, როგორიც მე-8 დავალებაში შექმნილი კატაა). ფუნქციამ უნდა "შეხედოს" ობიექტის თვისებებს და დააბრუნოს (return) მათი აღმწერი წინადადება.
function describePet(pet) {
  return `ეს არის ${pet.name} ის არის ${pet.age} წლის და არის მეგობრული?: ${pet.frendly}`;
}
console.log(describePet(cat));
// შექმენი მანქანის ობიექტი (car). მიეცი მას თვისება engineOn და მიანიჭე მნიშვნელობა false. ახლა, ობიექტის შიგნით შექმენი მეთოდი 
// (ფუნქცია ობიექტში), სახელად startEngine. გამოძახებისას ამ მეთოდმა engineOn-ის მნიშვნელობა უნდა შეცვალოს და გახადოს true.
const car2 = {
    enginon: false,
    startengine: function(){
        this.enginon = true;
    }
};
car2.startengine();
console.log(car2.enginon); 