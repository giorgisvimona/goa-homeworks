#შექმენით რამე ჩვეულებრივი dictionary, იყოს მაგ. მეგობრის ან ოჯახის წევრის სახელი, გვარი, ასაკი და ერთი ნებისმიერი რამ
dict={
    "name":"luka",
    'surname':'svimonishvili',
    "age":"12",
    "height":"1.44",
}
#for ლუპის გამოყენებით იგივე dictionary-დან დაპრინტეთ ყველა key
#for ლუპის გამოყენებით იგივე dictionary-დან დაპრინტეთ ყველა value
#საკვანძო სიტყვის გამოყენებით წაშალეთ ერთი key თავისი value-თი
#ახსნილი ფუნქციის გამოყენებით მთლიანი dictionary-დან ამოშალეთ ერთი ნებისმიერი key
#ახსნილი ფუნქციის გამოყენებით გააპრიალეთ მთლიანი dictionary (წაშალეთ ყველაფერი ;დ)
#აიღეთ არსებული  dictionary-დან ასაკი, და შეუცვალეთ  მას მნიშვნელობა



for key in dict:
    print(key)

for value in dict.values():
    print(value)

del dict['name']

dict.pop('surname')

dict.clear()

dict['age']= 999
print(dict['age'])

