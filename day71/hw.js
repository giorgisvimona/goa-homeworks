// 1) შექმენი ობიექტი სადაც გექნება შენი სახელი,გვარი და ასაკი.
const person = {
    firstName: "Giorgi",
    lastName: "svimonishvili",
    age: 20
};
// 2) შექმენი ობიექტი სადაც გექნება 3 ქვეყნის სახელი და მათი დედაქალაქები ცალკე.
const country = {
    georgia: "tbilisi",
    russia: "moscov",
    ingland: "london"
};
// 3) შექმენი car ობიექტი სადაც გექნება მანქნის მოდელი,ძრავი,წელი და ფერი და ბოლოს შეუცვლეთ მანქანას მოდელი.
const car = {
    model: "BMW M5",
    engine: "4.0",
    year: 2023,
    color: "Black"
};
car.model = "Bmw cls63 amg";
// 4) შექმენი ცხოველების ობიექტი სადაც გექნება რაღაც ცხოველები ჩასმული.
const animals = {
    animal1: "Lion",
    animal2: "dog",
    animal3: "cat",
    animal4: "Wolf"
};
// 5) შექმენი ხილების ობიექტი და  ხილის სახელი იყოს key და value მისი ფასი.
const fruits = {
    apple: 2,
    banana: 1.6,
    lemon: 1.5,
    kiwi: 5
};
// 6) შექმენო ობიექტი სადაც გექნება კომპიუტერის ნაწილების სახელები, მაგ: cpu: intel core i9.
const computer = {
    cpu: "Intel Core i9",
    mouse: "mouse",
    Keyboard: "keyboard"
};
// 7) შექმენი ფილმების ობიექტი სადაც გექნება Top 5 და ფილმების სახელები.
const films = {
    1: "roky balboa",
    2: "the maze runner",
    3: "interstellar",
    4: "supernatural",
    5: "creed"
}
// 8) შექმენი ობიექტი user სადაც გექნებ name და ფუნქცია sayHi რომელმაც უნდა გამოიტანოს (გამარჯობა, მე ვარ {name}.
const user = {
    name: "Giorgi",
    sayHi() {
        console.log(`გამარჯობა, მე ვარ ${this.name}`);
    }
};
user.sayHi();
// 9) შექმენი ობიექტი calc სადაც გექნება num1,num2 და result1 და result2 და ასევე 2 ფუნქცია plus და minus რომელიც 
// plus დროს ამ რიცხვების ჯამს დაითვლის და იგი გაუტოლდება result1 და minus დროს num2 - num1 გაუტოლდება result2 
// და ბოლო ფუნქცია ToString რომელიც გამოიტანს შედეგებს.
const calc = {
    num1: 20,
    num2: 50,
    result1: 0,
    result2: 0,
    plus() {
        this.result1 = this.num1 + this.num2;
    },
    minus() {
        this.result2 = this.num2 - this.num1;
    },
    ToString() {
        console.log(`${this.result1}`);
        console.log(`${this.result2}`);
    }
};
calc.plus();
calc.minus();
calc.ToString();
// 10) შექმენი მანქნის ობიექტი სადაც გექნება მანქნის მოდელი,ძრავი და ცხენის ძალა, მერე უნდა შექმნა ფუნქცია upgrade 
// რომელიც ძრავს მოუმატებს 2.0 და ცხენის ძალას 
// + 300 და ასევე უნდა შექმნა ფუნქცია ToString რომელიც გამოიტანს მანქნის მონაცემებს.

const myCar = {
    model: "BMW cls63 amg",
    engine: 4.0,
    horsePower: 450,
    upgrade() {
        this.engine += 2.0;
        this.horsePower += 300;
    },
    ToString() {
        console.log(
            `Model: ${this.model}, Engine: ${this.engine}, Horse Power: ${this.horsePower}`
        );
    }
};
myCar.upgrade();
myCar.ToString();