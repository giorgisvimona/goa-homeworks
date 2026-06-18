// 1) გაქვთ მოცემული ცვლადი Day რომელიც უდრის რომელიმე ციფრს 1-დან 7-მდე, თუ Day უდრის 1 
// მაშინ გამოიტანე "ორშაბათი" თუ 2 უდრის მაშინ "სამშაბათი" და გააკეთეთ ასე 1-დან 7-მდე.
let Day = 1;

switch (Day) {
  case 1:
    console.log("Orshabati");
    break;
  case 2:
    console.log("Sashabati");
    break;
  case 3:
    console.log("Otxshabati");
    break;
  case 4:
    console.log("xutshabati");
    break;
  case 5:
    console.log("Paraskevi");
    break;
  case 6:
    console.log("Shabati");
    break;
  case 7:
    console.log("Kvira");
    break;
  default:
    console.log("arcerti araa kviris dge");
}

// 2) გაქვთ მოცემული ცვლადი pizza რომელიც უდრის აქიდან რომელიმეს "pepperoni","margarita","hawaiin" 
// და თუ pizza უდრის pepperoni მაშინ გამოიტანე "მისი ღირებულება არის 20ლ", margarita -ს ღირებულება 
// 18ლ და თუ hawaiin მაშინ მისი ღირებულებაა 22ლ.
let pizza = "pepperoni";

switch (pizza) {
  case "pepperoni":
    console.log("misi girebuleba aris 20l");
    break;
  case "margarita":
    console.log("margaritas girebiulebaa 18l");
    break;
  case "hawaiin":
    console.log("hawaiin girebulebaa 22L");
    break;
  default:
    console.log("ar aris meniushi");
}
// 3) გაქვთ მოცემული ცვლადი Level რომელიც უდრის ან 1,2 ან 3 და თუ იგი 1-ს ტოლია მაშინ 
// გამოიტანე "შენ ხარ დამწყები", 2- "შენ ხარ მოყვარული", 3- "შენ ხარ ვეტერანი".
let Level = 1;

switch (Level) {
  case 1:
    console.log("Shen xar damwyebi");
    break;
  case 2:
    console.log("Shen xar moyvaruli");
    break;
  case 3:
    console.log("Shen xar veterani");
    break;
  default:
    console.log("chawere leveli mxolod 1idan 3amde");
}