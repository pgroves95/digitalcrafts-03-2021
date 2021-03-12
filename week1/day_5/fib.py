a = 1
b = 1
sum = 0
max = 4000000
while a < max and b < max:
    a += b
    if a % 2 == 0:
        sum += a
    b += a
    if b % 2 == 0:
        sum += b

print(sum)