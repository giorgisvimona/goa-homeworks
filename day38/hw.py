#შექმენით dictionary მაგ. მოსწავლეზე (სახელი, გვარი, ასაკი, საგანი)
dict={
    "name":"dato",
    'surname':'berize',
    "age":"15",
    "sagani":"math"
}
#for ლუპით დაბეჭდეთ ყველა key
for key in dict:
    print(key)


#for ლუპით დაბეჭდეთ ყველა value
for value in dict.values():
    print(value)

#შეცვალეთ ასაკი
dict['age']= 18
print(dict['age'])


#წაშალეთ საგანი
del dict ['sagani']


#სრულად გაასუფთავეთ dictionary
dict.clear()


#pop()-ით წაშალეთ გვარი
dict.pop('surname')

#რა არის key
#რა არის value
#Key არის გასაღები რომლითაც ვწვდებით მონაცემს dictionary-ში
#მაგალითად name,surname,age,sagani
#valueკი არის მონაცემი რომელიც ამ key-ს ეკუთვნის მაგალითად:dato,berize,15,math

#რა განსხვავებაა dictionary-ს და list-ს შორის
#list= ["apple", "banana", "apple"]
#print(list) listში მონაცემები ინახება მიმდევრობით და ყველაფერი იგივე ნაირად გამოდის terminalში თუ ჩვენ არ დავამატეთ ან ამოვაგდეთ რამე

#dictionaryში მონაცემები ინახება წყვილებად და მათზე წვდომა ხდება key-ით
# fruits = {
#    "1": "apple",
#    "1": "banana"
#}
#print(fruits["1"])  და გამოიტანს values ანუ appleს


#რა განსხვავებაა dictionary-ს და set-ს შორის
#setი  არ ინახავს ერთნაირ მონაცემებს და არ აქვს ინდექსაცია
#dictionaryში კი მონაცემები ინახება წყვილებად და მათზე წვდომა ხდება key-ით 
