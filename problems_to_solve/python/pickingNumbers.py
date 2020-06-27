def pickingNumbers(a):
    arr = []
    count = 0
    print(a)
    it = 0
    for i in a:
        arr = []
        for y in a:
            if y == i or y == i + 1:
                arr.append(y)
        if len(arr) > count:
            print(arr)
            
            count = len(arr)
            print(count)
    return count
