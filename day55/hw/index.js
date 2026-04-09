//დაწერეთ კოდი, რომელიც აიღებს მასივს [1,2,3,4,5], თითოეული ელემენტი გაამრავლოს 2-ზე და გამოიტანოს შედეგი
let num = [1,2,3,4,5];
for (let i = 0; i<num.length; i++){
    console.log(num[i]*2);
}
//დაწერეთ კოდი, რომელიც აიღებს მასივს [10,15,20,25], 
//თუ რიცხვი მეტია 18-ზე, გამოიტანოს "yes", სხვა შემთხვევაში "no"
let masive = [10,15,20,25];

for(let i = 0; i < masive.length; i++){
    if (masive[i] > 18){
        console.log("yes");
    } else {
        console.log("no");
    }
}
//დაწერეთ კოდი, რომელიც აიღებს მასივს [3,6,9,12], ყველა რიცხვის ჯამი გამოთვალოს
let num1 = [3,6,9,12];
let num2 = 0;

for (let i = 0; i < num1.length; i++){
    num2 += num1[i];
}console.log(num2);
//დაწერეთ კოდი, რომელიც აიღებს მასივს [2,4,6,8],
//თუ რიცხვი იყოფა 4-ზე, გამოიტანოს true, სხვა შემთხვევაში false
let numbers = [2,4,6,8];
for ( let i = 0; i < numbers.length; i++){
    if( numbers[i] % 4 == 0){
        console.log("true")
    } else{
        console.log("false")
    }
}
//დაწერეთ კოდი, რომელიც აიღებს მასივს [7,14,21,28], 
//თითოეული ელემენტი გაყოს 7-ზე და გამოიტანოს შედეგი
let massive = [7,14,21,28];
for ( let i = 0; i < massive.length; i++){
    console.log(massive[i] / 7)
}