#(hard) იგივე თაფლის გამოყენებით, გაიგეთ მეორდება თუ არა ელემენტები ორჯერ ან მეტჯერ (hint: set() function), უნდა დააბრუნოს true ან false
tuple = (1, 2, 3, -4, 50, -6, 89, -100, 700, -3, 0.5, 0)
if len(tuple) == len(set(tuple)):
    print(True)
else:
    print(False)
