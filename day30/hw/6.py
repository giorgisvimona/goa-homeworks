#6) შექმენი ცარიელი set, for ციკლით დაამატე მას ყველა კენტი რიცხვი 2-დან 8-მდე.

my_set = set()       

for i in range(2, 9): 
    if i % 2 == 1:    
        my_set.add(i)

print(my_set)
