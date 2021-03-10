print("\nThis program takes an integer and returns\nwhether the input is even or odd.\n")

num = int(input("Enter a whole number > "))

if num % 2 == 0:
    print(f"{num} is even.")
else:
    print(f"{num} is odd.")