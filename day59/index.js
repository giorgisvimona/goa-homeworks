//აიღეთ რიცხვების მასივი ერთიდან ათამდე, თუ რიცხვი კენტია გამოიტანე true, თუ ლუწი - false
let numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

