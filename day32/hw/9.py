#14) while ციკლით დაამატეთ ცარიელ სეტში 1- დან 20 - მდე რიცხვებ(update - ის გამოყენებით).
my_set=set()
i=1
while i<=20:
    my_set.update([i])
    i+=1

print(my_set)