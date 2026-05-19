// შექმენით პიროვნების ობიექტები და გაადაწოდეთ მას სახელი, გვარი, ასაკი და დაბადების თარიღი. 
//შემდგომ დაამატეთ ორი ფუნქცია: aging: ასაკს + 1 და მეორე toString: 
//გამოიტანოს წინადადება: "{სახელი} {გვარი} დაიბადა {დაბადების თარიღი} და არის {ასაკი} წლის"
const person = {
  firstName: "giorgi",
  lastName: "svimonishvili",
  age: 13,
  birthDate: "2012",

  aging: function () {
    this.age += 1;
  },

  toString: function () {
    return `${this.firstName} ${this.lastName} დაიბადა ${this.birthDate} და არის ${this.age} წლის`;
  }
};

person.aging();
console.log(person.toString());
