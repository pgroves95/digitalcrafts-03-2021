board_dimension = 10
count = 0
while count < board_dimension:
    if count % 2 == 0:
        print("_#" * (board_dimension//2))
    else:
        print("#_" * (board_dimension//2))
    count += 1
