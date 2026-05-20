// შექმენით საფულის ობიექტი, გადააწოდეთ მფლობელის სახელი, და ბალანსი (რამდენი თანხაა ბარათზე), შეემდგომ დაამატეთ ფუნქციები: addMoney, რომელიც მიიღებს არგუმენტ amount-ს, რომელიც ბალანსს უნდა დაემატოს. შემდეგ კი შექმენით მეორე ფუნქცია spendMoney, 
//რომელიც მიიღებს არგუმენტ amount-ს: balance - amount

function wallet(owner, balance){
    return{
        owner: owner,
        balance: balance,

        addMoney(amount){
            this.balance += amount;
        },

        spendMoney(amount){
            this.balance -= amount;
        }
    }
}

const wallett = wallet("gio", 1000000000);
wallett.addMoney(1000000000);
wallett.spendMoney(100);
console.log(wallett.balance);