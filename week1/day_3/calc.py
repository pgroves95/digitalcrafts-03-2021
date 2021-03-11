print("""This program performs integer arithmetic.
It takes a number, an operator, and another number,
then displays the result of the operation.\n""")

def entry():

    op_list = []
    prompt = ''
        
    prompt = input("Type a number >> ")
    try:
        prompt = int(prompt)
        op_list.append(prompt)
    except ValueError:
        print("That is not a valid number, Try again.")
        return entry()

    prompt = input("\nType an operator >> ")
    if prompt in ['+', '-', '*', '/']:
        op_list.append(prompt)
    else:
        print("That is not a valid operator. Try again.")
        return entry()

    prompt = input("\nType another number >> ")
    try:
        prompt = int(prompt)
        op_list.append(prompt)
    except ValueError:
        print("That is not a valid number, Try again.")
        return entry()

    return op_list


def calc(expression):

    num1 = expression[0]
    operator = expression[1]
    num2 = expression[2]

    if operator == '+':
            return num1 + num2
    elif operator == '-':
            return num1 - num2
    elif operator == '*':
            return num2 * num2
    else:
            return num1 / num2

done = ''
while done != 'Y':

    expression = entry()
    print(f"{expression[0]} {expression[1]} {expression[2]}")
    calc = calc(expression)
    print(calc)
    done = input("Type 'Y' to quit, otherwise continue. >> ")