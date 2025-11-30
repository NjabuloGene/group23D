setPin = input(print("Please create a 4 digit pin"))

pinInput = input(print("Enter your Pin?(only 3 attempts!)"))

def pinCheck():
    if setPin == pinInput:
        print("You are now Logged In")
    elif setPin != pinInput:
        print("Wrong,")


"""def wrongPinLoop():
    if setPin != pin:
        print("Wrong Pin, Please try again!")

while setpin != setPin:
    wrongPinLoop()
    if setpin == setPin:
        break
        """