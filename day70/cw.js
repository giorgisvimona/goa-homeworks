// 1)შექმნათ ფუნქცია რომელიც გამოითვლის რიცხვი კენტია თუ ლუწი
function evenorodd(num){
    if(num % 2==0){
        return "luwia"
    }else{
        return "kentia"
    }
  }
evenorodd()
console.log(evenorodd(10))
// 2) შექმენით ფუნქცია რომელიც გადაუყვება  რიცხვების სიას და ამოიღებს ყვეალზე დიდ რიცხვს.
function name(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}
console.log(name([1,2,3,4,5,6,7,8,9]))
// 3)ახსენით რა განსხვავები არის Global-function-block(scope)-შორის
// globalის დროს ცვლადები ყველგანაა ხელმისაწვდომი
// function scopის დროს ჩვენი დაწერილი ცვლადი მარტო ფუნქციის შიგნით არის ხელმისაწვდომი
// ბლოკ სკოუპი კი ნიშნავს რომ ჩვენი დაწერილი ცვლადი მხოლოდ ბლოკშია ხელმისაწვდომი 