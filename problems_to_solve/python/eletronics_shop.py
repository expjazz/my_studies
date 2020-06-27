def getMoneySpent(keyboards, drives, b):
    arr = [9876543219876]
    a = [0, 0]

    for i in keyboards:
        for y in drives:
            c = y + i
            d = b - c

            if d < arr[0] and d >= 0:
                arr[0] = d
                a[0] = i
                a[1] = y
                
    if arr[0] == 9876543219876:
        return - 1
    else:
        return sum(a)