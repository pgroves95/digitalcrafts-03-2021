user = input("Please enter your name > ")
length = len(user)

while length < 1:
    print("Please enter at least one character")
    user = input("Please enter your name > ")
    length = len(user)

print(f"Your name is {user}")