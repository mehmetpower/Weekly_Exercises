user_list=[]
for i in range(3):
  i = input("Please enter a number:")
  user_list.append(i)

user_list.sort()
print(*user_list, end=" ")