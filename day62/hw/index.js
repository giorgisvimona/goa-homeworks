// შექმენით პიროვნების ობიექტები და გაადაწოდეთ მას სახელი, გვარი, ასაკი და დაბადების თარიღი. 
//შემდგომ დაამატეთ ორი ფუნქცია: aging: ასაკს + 1 და მეორე toString: 
//გამოიტანოს წინადადება: "{სახელი} {გვარი} დაიბადა {დაბადების თარიღი} და არის {ასაკი} წლის"
const person = {
  firstName: "keisari",
  lastName: "gvari",
  age: 1626,
  birthDate: "400",

  function aging () {
    age += 1;
  }

  toString: function () {
    return "{firstName} {lastName} დაიბადა {birthDate} და არის {age} წლის";
  }
};


