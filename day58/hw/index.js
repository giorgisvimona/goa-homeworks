// //1) დაწერეთ ფუნქცია სადაც მიესალმებით რაღაც სახელს მაგ Hello, {Giorgi}.
function greet(name){
    console.log("hello " + name);
}
(greet("gio"));

// 2) დაწერეთ ფუნქცია სადაც გაიგებთ უმცირეს რიცხვს ამ მასივიდან [2,10,-20,100,90,50,40].
function findMin(num) {
    let min = num[0]; 

    for (let i = 1; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
    }

    return min;
}

console.log(findMin([2,10,-20,100,90,50,40]));

// 3) დაწერეთ ფუნქცია სადაც კენტ რიცხვებს აიყვანთ კვადრატში და ლუწს კუბში ხოლო თუ რიცხვი ნულის ტოლია გამოიტანეთ "Zero".
function evenorodd(nums){
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num == 0) {
            console.log("Zero");
        } else if (num % 2 == 0){
            console.log(num ** 3);
        } else {
            console.log(num ** 2); 
        }
    }
}
evenorodd([67,3,6,9]);

// 4) დაწერეთ ფუნქცია სადაც გექნებათ პროდუქტის ფასი და პროდუქტის აქცია და გამოთვალეთ მისი საბოლოო ფასი ფორმულით. price - (price * discount) / 100
function finalPrice(price, discount) {
    return price - (price * discount) / 100;
}
console.log(finalPrice(100, 20));
// 5) Hard - დაწერეთ ფუნქცია სადაც დაითვლით კენტი და ლუწი რიცხვების ჯამს ოღონდ თუ რიცხვი ლუწია კვადრატში უნდა აიყვანო და კენტის დროს კუბში, ამ მასივის 
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let numb = numbers[i];

        if (numb % 2 === 0) {
            sum += numb ** 2;
        } else {
            sum += numb ** 3;
        }
    }
    return sum;
}