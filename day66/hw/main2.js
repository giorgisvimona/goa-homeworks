// შექმენით ცხოველის ობიექტი, რომელსაც გადააწოდებთ სახელს და isHungry (რომელიც უდრის true-ს). 
// დაამატეთ ფუნქცია eat, რომელიც isHungry = false და გამოიტანს "{ცხოველის სახელი} დანაყრდა'.
function animal(name, isHungry) {
    return {
        name: name,
        isHungry: isHungry,

        eat() {
            this.isHungry = false;
            console.log(`${this.name} დანაყრდა`);
        }
    };
}

const animall = animal("T rex", true);
animall.eat();
console.log(animall.isHungry);                                      