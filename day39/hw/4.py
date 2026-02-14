#იგივე თაფლის გამოყენებით გამოიტანეთ უდიდესი და უმცირესი რიცხვი (max() / min() ფუნქციების გარეშე)
tuple = (1, 2, 3, -4, 50, -6, 89, -100, 700, -3, 0.5, 0)

max = tuple[0]
min = tuple[0]

for i in tuple:
    if i > max:
        max = i
    if i < min:
        min = i

print(max)
print(min)
