list1=[1,2,3,[4,5],6,[7,8]]
sum=0
for i in range(len(list1)):
    if type(list1[i])==list:
        for j in range(len(list1[i])):
            sum+=list1[i][j]
    else:
        sum+=list1[i]
print(sum)

