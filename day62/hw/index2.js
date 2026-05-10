// შექმენით პროდუქტების მარაგის ობიექტი warehouse. 
// გადააწოდეთ სხვადასხვა property-ები, როგორიცაა: name (საცავის სახელი), category (საჭმელი, ავეჯი, ა.შ.),
//  კომპანია (რაც გინდათ ის დაწერეთ), status (active, low-stock, out-of-stock), 
// stock (რაოდენობა, მაგ. 20), reserved (ვიღაცისთვის ან სამომავლოდ შენახული პროდუქცები, 
//რაც უნდა უდრიდეს ნულს)
 const warehouse = {
  name: "city Storage",
  category: "საჭმელი",
  company: "GeoMarket",
  status: "active",
  stock: 200000000,
  reserved: 67
};
console.log(warehouse);
//2.1. შექმენით ფუნქცია updateStatus(), რომელიც არ მიიღებს არანაირ არგუმენტს. 
//თუ stock ნაკლებია ნულზე ან ნულის ტოლია, სტატუსი უნდა გახდეს out-of-stock; 
//თუ stock ნაკლებია ხუთზე, სტატუსი უნდა იყოს low-stock. სხვა შემთხვევაში კი უნდა იყოს active
