// შექმენით პროდუქტების მარაგის ობიექტი warehouse. 
// გადააწოდეთ სხვადასხვა property-ები, როგორიცაა: name (საცავის სახელი), category (საჭმელი, ავეჯი, ა.შ.),
//  კომპანია (რაც გინდათ ის დაწერეთ), status (active, low-stock, out-of-stock), 
// stock (რაოდენობა, მაგ. 20), reserved (ვიღაცისთვის ან სამომავლოდ შენახული პროდუქცები, 
//რაც უნდა უდრიდეს ნულს)
 const warehouse = {
  name: "nikora",
  category: "საჭმელი",
  company: "nikora",
  status: "active",
  stock: 30,
  reserved: 0;

// 2.1. შექმენით ფუნქცია updateStatus(), რომელიც არ მიიღებს არანაირ არგუმენტს. 
// თუ stock ნაკლებია ნულზე ან ნულის ტოლია, სტატუსი უნდა გახდეს out-of-stock; 
// თუ stock ნაკლებია ხუთზე, სტატუსი უნდა იყოს low-stock. სხვა შემთხვევაში კი უნდა იყოს active
 updateStatus: function () {
    if (this.stock <= 0) {
      this.status = "out-of-stock";
    } else if (this.stock < 5) {
      this.status = "low-stock";
    } else {
      this.status = "active";
    }
  },

//  დაამატეთ შემდეგი ფუნქციები: restock(amount), სადაც amount უდრის პროდუქტების რაოდენობას, რომელიც მარაგს (stock) უნდა დაემატოს. ამის შესრულების შემდეგ გაუშვით მანამდე შექმნილი updateStatus() ფუნქცია.
  restock: function (amount) {
    this.stock += amount;
    this.updateStatus();
  },
// 2.3. შექმენით შემდეგი ფუნქცია: reserve(amount), რომელიც მიიღებს amount არგუმენტს, რაც პროდუქტების რაოდენობაა. 
//თუ ეს რაოდენობა stock-ზე მეტია, მაშინ უნდა გამოიტანოს false. სხვა შემთხვევაში კი reserved + amount
  reserve: function (amount) {
        if (amount > this.stock) {
            return false;
        } else {
            return this.reserved + amount;
        }
    },
// 2.4. დაამატეთ შემდეგი ფუნქცია: available(), რომელიც იქნება უარგუმენტო. უნდა გამოიტანოს ხელმისაწვდომი პროდუქტების რაოდენობა, ანუ ხელმისაწვდომს - რეზერვი (stock - reserve)
  available: function (){
        return this.stock - this.reserved

    },

// 2.5. საბოლოოდ კი დაამატეთ toString() ფუნქცია, რომელიც გამოიტანს შემდეგ წინადადებას: "სახელი: {name}, ხელმისაწვდომი: {stock - reserved}, სტატუსი:  {status}"
  toString: function () {
    return `სახელი: ${this.name}, ხელმისაწვდომი: ${this.available()}, სტატუსი: ${this.status}`;
  },
};
  console.log(warehouse.toString());
console.log(warehouse.available());
warehouse.updateStatus();
