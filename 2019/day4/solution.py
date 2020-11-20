import re 

def main():
    pass_range = (108457, 562041)
    possible_passwords = tuple(x for x in range(pass_range[0], pass_range[1]) if check_increasing(x) if check_adjacent(x))
    print("Part 1: " + str(len(possible_passwords)))
    real_possible_passwords = tuple(x for x in possible_passwords if check_double(x))
    print("Part 2: " + str(len(real_possible_passwords)))

def check_double(n):
    string = str(n)
    double = False
    banned = []
    prev = ""
    for i in string:
        if i == prev and double == False and i not in banned:
            double = True
        elif i == prev and double == True and i not in banned:
            double = False
            banned.append(prev)
        elif prev != i and double == True:
            return True
        prev = i
    return double


def check_adjacent(n):
    regex = "(.)\\1"
    if re.search(regex, str(n)):
        return True
    else:
        return False

def check_increasing(n):
    string = str(n)
    for i in range(len(string) - 1):
        if string[i] <= string[i+1]:
            continue
        else:
            return False
    return True

if __name__ == "__main__":
    main()
