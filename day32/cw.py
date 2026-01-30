my_set=set()
my_set.update([1,2,3,4,4,56,7,8,8,8])
result=list(my_set)
for i in result:
    if i % 2==0:
        result.remove(i)
print(set(result))











numbers = {1, 3, 5, 7}
for i in range(11, 21):
    numbers.update([i])
print(numbers)

my_set1={1,2,3,4,5}
my_set1.remove(2)
my_set1.discard(4)
print(my_set1)
