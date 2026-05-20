// შექმენით ფუნქცია light, გადააწოდეთ isOn = false. დაამატეთ ფუნქცია turnOn, 
// რომელიც isOnს მიანიჭებს true-ს. შემდეგ მეორე ფუნქცია turnOff, რომელიც  isOn-ს მიანიჭებს false-ს
function light(isOn){
    return{
        isOn: false,
        
        turnon(){
            this.isOn = true;
        },
        turnoff(){
            this.isOn = false;
        }
    };
}
const lightt = light(false)
lightt.turnOn();
console.log(lightt.isOn); 
lightt.turnOff();
console.log(lightt.isOn); 