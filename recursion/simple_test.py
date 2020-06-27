def is_palin(word):
    if len(word) < 2:
        return True
    else:
        if word[0] != word[-1]:
            return False
        else:
            is_palin(word[1:-1])
    return True

print(is_palin("madamimadam"))