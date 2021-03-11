list = []

def selector(num):
    if num == '1':
        add()
    elif num == '2':
        delete()
    elif num == '3':
        view()
    elif num == 'q':
        print("\ngoodbye")
    else:
        print("\ninput not accepted")

def add():
    
    title = input("What is the title of the task >> ")
    level = input("Is your task of high, medium or low priority? >> ")
    
    if level == 'high':
        print(f"\n{title} has been added as {level} priority.")
    elif level == 'medium':
        print(f"\n{title} has been added as {level} priority.")
    elif level == 'low':
        print(f"\n{title} has been added as {level} priority.")
    else:
        print("\npriority not recognized. Let's try again.\n")
        return add()
    
    new_task = {'title' : title, 'priority': level}
    list.append(new_task)

def delete():
    for task in list:
        print(f"{list.index(task) + 1})\nTitle: {task.get('title')}\n  Priority: {task.get('priority')}\n")
    which = input("""
    Type the number above the task to mark it as complete
    (This permanently deletes the task) >> """)
    try:
        which = int(which)
    except ValueError:
        print("\nThat is not a number. Try again.")
        return delete()
    
    if which in range(1,len(list) + 1):
        selection = list.pop(which-1)
        print(f"\nYou marked {selection.get('title')} as complete.")
    else:
        print("\nThat number is not connected to an active task. Try again")
        return delete()
        

    

def view():
    for task in list:
        print(f"Title: {task.get('title')}\n  Priority: {task.get('priority')}\n")


print("""
The following program allows the user to add tasks to
a todo list, along with a priority (high, medium, low).
The user can 'check off' (delete) tasks as they are completed,
continue to add tasks, as well as view all the tasks.
Type 'q' to quit.\n""")

prompt = ''
while prompt != 'q':
    
    prompt = input("""
    Type the following:
    1 - add a task
    2 - complete a task
    3 - view incomplete tasks\n
    >> """)

    selector(prompt)

