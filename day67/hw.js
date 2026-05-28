// 1)ახსენით როგორ მუშაობს Binary Search ალგორითმი
// ბაინარი სერჩ ეზებს შუა ელემენტს თუ ეს შუა ელემენტი ნაკლებია იმ რიცხვზე რომელიც უნდა ვიპოვოთ გადადის მარჯვენა მხარე და ასე გრძელდება 
// 2)ახსენით როგორ მუშაობს Linear Search ალგორითმი
// ლაინერ სერჩი უფრო ადამიანურად ეძებს მიყოლებით ჯერ პირველი რიცხვი მერე მეორე რიცხვი
// 3)ახსენით რა არის Factory Function
// Factory Function არის ფუნქცია რომელიც ქმნის ობიექტებს და ამ ობიექტებს შემდეგ აძლევ რამე ინფორმაციას მაგალითად names 17წელი
// 4)შექმენით factory function, ერთი იყოს createItem, რომლის არგუმენტები იქნება name, type, value, 
// ამის შემდეგ კი ამ ფუნქციის გამოყენებით შექმენით რაიმე ცვლადი
function createItem(name,type,value){
    return{
        name,
        type,
        value,
    };
}
let footballer = createItem("kvara", "lw", 100000000);
console.log(footballer)
// 5)შექმენით Bot ობიექტი, რომელსაც ექნება id, health და speed გადაწოდებული
// დაამატეთ მეთოდები: takeDamage(dmg), რომელიც health - dmg
// run(spd), სადაც speed + spd
const Bot = {
  id: 1,
  health: 500,
  speed: 5,

  takeDamage(dmg) {
    this.health -= dmg;
  },

  run(spd) {
    this.speed += spd;
  }
};

Bot.takeDamage(400);
Bot.run(5);
console.log(Bot);