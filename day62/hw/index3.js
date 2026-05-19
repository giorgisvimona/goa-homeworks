// შექმენით ობიექტი Library, გადააწოდეთ books (ცარიელი მასივი), borrowed (ცარიელი ობიექტი), 
//nId = 1 (საინდექსო ცვლადი)
let Library = {
    books: [],
    borrowed: [{
        title: "the maze runner",
        author: "jeimz dashner",
        year: "2009"
    }],
// 3.1. ობიექტში დაამატეთ შემდეგი ფუნქცია: addBook(title, author, year), 
//რომელიც ამ სამ არგუმენტს მიიღებს. ფუნქციაში შექმენით ახალი book ობიექტი და 
//გაადაწოდეთ: title, author, year, id (რომელიც უდრის nId++). შემდეგ ეს ობიექტი ჩაამატეთ books სიაში 
//(push), საბოლოოდ კი გამოიტანეთ: "წიგნი დაემატა"
  nId: 1,
    addbook: function (title,author,year){
        let book = {
            title: title,
            author: author,
            year: year,
            id: this.nId++

        }
    this.books.push(book)
        return "წიგნი დაემატა"
    },

// 3.2. შექმენით ფუნქცია  findBook(id), რომელიც მიიღებს ერთ არგუმენტს. loop-ის გამოყენებით, 
//თუ წიგნი კონკრეტულ ინდექსზე უდრის ამ პარამეტრ id-ს (books[i] = id),
// მაშინ გამოიტანეთ მთლიანი წიგნის ობიექტი.
 findbook: function (id){
        for (i of this.books){
            return this.books[id]

        }
    },
// 3.3. საბოლოოდ, შექმენით borrowBook(id) ფუნქცია, რომელიც ერთ პარამეტრს მიიღებს. loop-ის დახმარებით, 
//იპოვეთ კონკრეტული წიგნი (იგივე ლოგიკა რაც მანამდე), თუ borrowed მასივში წიგნი ამ id-ით არსებობს, მაშინ 
//გამოიტანოს "წიგნი უკვე აღებულია" (borrowed[i]). სხვა შემთხვევაში borrowed[i] = true და გამოიტანოს 
//"წიგნი აღებულია"

    borrowBook: function (id){
        for ( i of this.borrowed){
            if (this.books[id] === i){
                return "წიგნი უკვე აღებულია"
            } else {
                return "წიგნი წარმატებით აიღე"
            }
        }
    }

};
Library.addbook("the maze runner","jeimz dashner","2009")

