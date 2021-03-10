#user first name
first1 = input("Please enter your first name > ")
len1 = len(first1)

while len1 < 1:
    print("Please enter at least one character")
    first1 = input("Please enter your first name > ")
    len1 = len(first1)

#user last name
last1 = input("Please enter your last name > ")
len2 = len(last1)

while len2 < 1:
    print("Please enter at least one character")
    last1 = input("Please enter last your name > ")
    len2 = len(last1)

#friend first name
first2 = input("Please enter your friend's first name > ")
len3 = len(first2)

while len3 < 1:
    print("Please enter at least one character")
    first2 = input("Please enter your friend's first name > ")
    len3 = len(first2)

#friend last name
last2 = input("Please enter your friend's last name > ")
len4 = len(last2)

while len4 < 1:
    print("Please enter at least one character")
    last2 = input("Please enter your friend's last name > ")
    len4 = len(last2)

#print all names
print(f"{first1} {last1} is friend's with {first2} {last2}.")