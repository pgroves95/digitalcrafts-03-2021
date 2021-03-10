print("""
This program takes an integer. If the number
is divisible by 3, it will return 'fizz'. If
the number is divisible by 5, it will return 'buzz'.
If the number is divisible by both 3 and 5,
it will return 'fizz buzz'.\n""")

num = int(input("Please enter an integer > "))

if num % 3 == 0 and num % 5 == 0:
    print("fizz buzz")

elif num % 3 == 0:
    print("fizz")

elif num % 5 == 0:
    print("buzz")

else:
    print("The given integer is\nnot divisible by 3 nor 5.")

