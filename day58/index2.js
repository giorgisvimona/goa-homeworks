//2) დაწერეთ ფუნქცია სადაც რიცხვს აიყვანთ კვადრატში თუ იგი დადებითია და თუ უარყოფითი აიყვანეთ კუბში.
function kvadratiankubi(num) {
  if (num > 0) {
    return num ** 2; 
  }else if(num == 0){
    return 0;
  } else {
    return num ** 3; 
  }
}
