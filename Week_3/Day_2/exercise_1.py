user_list=[]
for i in range(3):
  i = input("Please enter a number:")
  user_list.append(i)

user_list.sort()
print(*user_list, end=" ")

'''for i in range(0, len(l1)):
    for j in range(i+1, len(l1)):
        if l1[i] >= l1[j]:
            l1[i], l1[j] = l1[j],l1[i]'''