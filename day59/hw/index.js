// გაქვს რიცხვების მასივი $[1, 15, 8, 22, 5, 30]$. გამოიტანე მხოლოდ ის რიცხვები, რომლებიც 10-ზე მეტია.
function massive(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 10) {
            console.log(num[i]);
        }
    }
}

// გაქვს მასივი ["თბილისი", "ქუთაისი", "ბათუმი"]. თითოეულ ქალაქს წინ მიუწერე ტექსტი "მე ვცხოვრობ:  ( ქალაქში)"
function citi(city) {
    for (let i = 0; i < city.length; i++) {
        console.log("მე ვცხოვრობ " + city[i] + "ში");
    }
}
// აიღე სახელების მასივი, შემოატანინე მომხმარებელს სახელი, თუ შემოტანილი სახლი არსებობს საიში მაშინ გამოიტანე მისი ინდექსი, თუ არ არსებობს მაშინ -1
function find(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            return i;
        }
    }
    return -1;
}
console.log(find(["gio", "nika", "nia"],"gio"));
// გაქვს მასივი [10, 20, 30, 40, 50]. გამოიტანე მხოლოდ პირველი და ბოლო ელემენტის ჯამი
function sum(numbers) {
    return numbers[0] + numbers[numbers.length - 1];
}

console.log(sum([10, 20, 30, 40, 50]));
// აიღე რიცხვების მასივი და გამოიტანე ყველა ელემენტი უკუღმა თანმიმდევრობით
function Reverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
Reverse([1, 2, 3, 4]);
// გაქვს მასივი, სადაც წერია როგორც დადებითი, ისე უარყოფითი რიცხვები. 
//დაითვალე, რამდენი უარყოფითი რიცხვია მასივში.
function count(ricxvebi) {
    let caunt = 0;

    for (let i = 0; i < ricxvebi.length; i++) {
        if (ricxvebi[i] < 0) {
            caunt++;
        }
    }
    return caunt;
}
console.log(count([6, -2, 3, -67, -60]));