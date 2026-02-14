#დაპრინტეთ დადებითი, უარყოფითი რიცხვების და ნულების რაოდენობა კონკრეტული თაფლის გამოყენებით
tuple = (1, 2, 3, -4, 50, -6, 89, -100, 700, -3, 0.5, 0)
positive = 0
negative = 0
zero = 0

for i in tuple:
    if i > 0:
        positive += 1
    elif i < 0:
        negative += 1
    else:
        zero += 1

print(positive)
print(negative)
print(zero)
