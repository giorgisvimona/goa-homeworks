#8) შექმენი ორი ცარიელი set, პირველს დაამატე რიცხვები 1 და 2, მეორეს დაამატე რიცხვები 2 და 3, შემდეგ გააერთიანე ისინი.
my_set1=set()
my_set2=set()

my_set1.add(1)
my_set1.add(2)

my_set2.add(2)
my_set2.add(3)

my_set3=my_set2.union(my_set1)
print(my_set3)


