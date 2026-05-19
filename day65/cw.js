// შექმენით LicensePlate ობიექტი, რომელიც შეინახავს მანქანის ნომერს, ერთი არგუმენტი -> plateNum
function LicensePlate(plateNum) {
  return {
    number: plateNum
  }
}

//შექმენით CreateCar ობიექტი, რომელიც არგუმენტად მოითხოვს manufacturer, model, year, plateNum, 
// აქაც ანალოგიურად დააბრუნებს შედეგს 
//(plateNum-ზე გამოიყენეთ LicensePlate() ფუნქცია და გადააწოდეთ ეს plateNum)

function CreateCar(manufacturer, model, year, plateNum) {
  return {
    manufacturer: manufacturer,
    model: model,
    year: year,
    plate: LicensePlate(plateNum)
  };
};
//შექმენით CarPark ობიექტი, ტევადობა -> 10 მანქანა, ცარიელი მასივი parkedCars, 
//ასევე ექნება ორი ფუნქცია: Park და UnPark

const CarPark = {
  capacity: 10,
  parkedCars: [],

  Park(car) {
    if (this.parkedCars.length === this.capacity) {
      return false;
    }

    for (let i = 0; i < this.parkedCars.length; i++) {
      if (this.parkedCars[i] === car) {
        return "isedac dgas sxvagan daayene gtxov";
      }
    }
    this.parkedCars.push(car);
  }
};
// Park: დაამატოთ მანქანა ავტოსადგომში (parkedCars მასივში), თუ ავტოსადგომი სავსეა, უნდა დააბრუნოს false, თუ მანქანა უკვე დგას 
// ავტოსადგურში, მაშინ დააბრუნოს "ისედაც დგას"
  const CarPark = {
  capacity: 10,
  parkedCars: [],

Park(car) {
    if (this.parkedCars.length >= this.capacity) {
      return false;
    }

    for (let i = 0; i < this.parkedCars.length; i++) {
      if (this.parkedCars[i] === car) {
        return "isedac dgas";
      }
    }

// UnPark: ამოშლის კონკრეტულ მანქანას ავტოსადგომიდან (parkedCars მასივიდან).
//  თუ მანქანა ვერ მოიძებნა, ანუ არ დგას ავტოსადგურში დააბრუნოს false