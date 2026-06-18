// 1) ახსენი რა არის Switch,case,break,default.
// switch გამოიყენება მაშინ როცა გვჭირდება სხვადასხვა მოქმედება გავაკეთოთ ისეთი ფუნქციით რომელსაც გააჩნიაif elseის მსგავსი ფუნქცია
// caseის დახმარებით ვწერთ - თუ ეს მნიშვნელობაა გამოიტანე ეს
// break აჩერებს კოდს
// default მუშაობს მაშინ, როცა არცერთი case არ დაემთხვა ცვლადის მნიშველობას
// 2) შექმენი ცვლადი channel რომელიც უდრიდეს იქნება არხებს 1-დან 5-მდე, თუ იგი უდრის 1 მაშინ გამოიტანე 
// "პირველი არხი", 2 - "სეტანტა" 3- "ჯდს" 4 - "ოპერა" 5- "სილკ-უნივერსალი".
let channel = 4;
switch (channel){
    case 1:
        console.log("პირველი არხი");
        break;
    case 2:
        console.log("სეტანტა");
        break;
    case 3:
        console.log("ჯდს");
        break;
    case 4:
        console.log("ოპერა");
        break;
    case 5:
        console.log("სილკ-უნივერსალი");
        break;
    default:
        console.log("შეიყვანე არხი 1იდან 5ამდე");
}
// 3) გაქვთ მოცემული ცვლადი Brand რომელიც შეიძლება უდრიდეს Ferrari,Bmw,Toyota,Ford.
// თუ brand არის Ferrari მაშინ გამოიტანე მისი წარმოშობის ქვეყანა მაგ: Italia.
let brand = "bmw";

switch(brand) {
    case "ferrari":
        console.log("italia");
        break;
    case "bmw":
        console.log("germany");
        break;
    case "toyota":
        console.log("japan");
        break;
    case "ford":
        console.log("usa");
        break;
    default:
        console.log("შეიყვანე სხვა ბრენდი");
}
// 4) შექმენით ცვლადი wheather რომელიც უდრიდეს იქნება sun,rain ან snow თუ sun - გამოიტანე "გაიკეთე 
// მზისდამცავი სათვალე", rain - "აიღე ქოლგა", snow - "გარეთ სიცივეა და ამიტომ თბილად ჩაიცვით".
let wheather = "sun";

switch(wheather) {

    case "sun":
        console.log("გაიკეთე მზისდამცავი სათვალე");
        break;

    case "rain":
        console.log("აიღე ქოლგა");
        break;

    case "snow":
        console.log("გარეთ სიცივეა და ამიტომ თბილად ჩაიცვით");
        break;

    default:
        console.log("შეიყვანე სხვა ამინდი");
}
// 5) გაქვთ მოცემული ცვლადი gear რომელიც არის მანქნის გადაცემა და თუ იგი 1 - მაშინ გამოიტანე "მანქანა
//  ძალიან ნელა მოძრაობს" 2 - გამოიტანე "მანქანა ნელა მოძრაობს",
// 3 - "მისი სიჩქარე საშუალო არის", 4 - "სწრაფია", 5 - "ძალიან სწრაფია", 6 - "მისი მაქსიმალური სიჩქარე".
let gear = 4;

switch(gear) {
    case 1:
        console.log("მანქანა ძალიან ნელა მოძრაობს");
        break;
    case 2:
        console.log("მანქანა ნელა მოძრაობს");
        break;
    case 3:
        console.log("მისი სიჩქარე საშუალო არის");
        break;
    case 4:
        console.log("სწრაფია");
        break;
    case 5:
        console.log("ძალიან სწრაფია");
        break;
    case 6:
        console.log("მისი მაქსიმალური სიჩქარე");
        break;
    default:
        console.log("ეგრე სწრაფად ნუ დადიხარ");
}