print("\nThis program performs integer arithmetic.\nIt takes a number, an operator, and another number,\nthen displays the result of the operation.\n")

num1 = int(input("Type a number > "))
operator = input("Type an operator (+, -, *, /) > ")
num2 = int(input("Type another number > "))

def add(x,y):
    return x + y
def subtract(x,y):
    return x - y
def multiply(x,y):
    return x * y
def divide(x,y):
    return x / y

result = 0
if operator == '+':
    result = add(num1, num2) 
elif operator == '-':
    result = subtract(num1, num2)
elif operator == '*':
    result = multiply(num1, num2)
elif operator == '/':
    result = divide(num1, num2)
else:
    print("Operator not recognized. Please try again.")
    exit()

print(f"The result is: {result}")