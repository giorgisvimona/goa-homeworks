// 1) ახსენი რას შვება round,floor,ceil,trunc,pow,sqrt,min,max
// round(x) – ამრგვალებს რიცხვს უახლოეს მთელამდე
// floor(x) – ამრგვალებს ქვემოთ (უდიდესი მთელი, რომელიც ნაკლებია ან ტოლია)
// ceil(x) – ამრგვალებს ზემოთ (უმცირესი მთელი, რომელიც მეტია ან ტოლია)
// trunc(x) – შლის ათწილად ნაწილს (უბრალოდ ჭრის)
// pow(a, b) – ა-ს აყვანა b ხარისხში
// sqrt(x) – კვადრატული ფესვი
// min(...) – აბრუნებს ყველაზე პატარა რიცხვს
// max(...) – აბრუნებს ყველაზე დიდ რიცხვს
// 2) გაქვთ მოცემული მასივი [1,2,3,5.5,6.2,10.1,7] და დაითვალეთ მათი ჯამი და დაამრგვალეთ round.
let arr = [1,2,3,5.5,6.2,10.1,7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
let result = Math.round(sum);
console.log(result);
// 3) გაქვთ მოცემული მასივი [33,23,3,2.3,9.2,14.1,7] და დაითვალეთ მათი ჯამი და დაამრგვალეთ floor. 
let arr1 = [33,23,3,2.3,9.2,14.1,7];
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 = sum1 + arr1[i];
}
let result1  = Math.floor(sum1);
console.log(result1);
// 4) გაქვთ მოცემული მასივი [21,7,3,3.1,2.2,10.1,7] და დაითვალეთ მათი ჯამი და დაამრგვალეთ ceil.
let arr2 = [21,7,3,3.1,2.2,10.1,7];
let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
  sum2 = sum2 + arr2[i];
}
let result2 = Math.ceil(sum2);
console.log(result2);
// 5) გაქვთ მოცემული მასივი [1.0111,2.2229,5.01341,10.000003]
//და დაითვალეთ მათი ჯამი და მოაშორეთ რიცხვები წერტილის მერე trunc.
let arr3 = [1.0111,2.2229,5.01341,10.000003];
let sum3 = 0;
for (let i = 0; i < arr3.length; i++) {
  sum3 += arr3[i];
}
let result3 = Math.trunc(sum3);
console.log(result3);
// 6) გაქვთ მოცემული მასივი [4,2,7,3] და დაითვალეთ მათი ჯამი და გამოიტანე მაგ ფესვიდან კვადრატი sqrt.
let arr4 = [4,2,7,3];
let sum4 = 0;
for (let i = 0; i < arr4.length; i++) {
  sum4 += arr4[i];
}
let result4 = Math.sqrt(sum4);
console.log(result4);
// 7) გაქვს მოცემული მასივი [1,2,3,4,5,6,7,8,9,10,-5,-2,20,15,-20,7] თუ რიცხვი ნაკლებია 0-ზე 
//მაშინ აიყვანეთ კვადრატში თუ მეტია ნულზე მაგრამ ნაკლებია 10 მაშინ აიყვანეთ კუბში 
//სხვა შემთხვევაში 5 ხარისხში აიყვანეთ.
let arr5 = [1,2,3,4,5,6,7,8,9,10,-5,-2,20,15,-20,7];
let result5 = [];

for (let i = 0; i < arr5.length; i++) {
  let num = arr5[i];
  if (num < 0) {
    result5.push(Math.pow(num, 2)); 
  } else if (num > 0 && num < 10) {
    result5.push(Math.pow(num, 3)); 
  } else {
    result5.push(Math.pow(num, 5)); 
  }
}
console.log(result5);