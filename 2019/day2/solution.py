import itertools

def main():
    with open("input.txt", "r") as f:
        intcode = [int(x) for x in f.read().split(',')]

    copy = intcode.copy()
    part1 = run_code(copy)
    print("part 1: {}".format(part1[0]))

    for i in itertools.product(range(0, 100), repeat=2):
        copy = intcode.copy()
        x = i[0]
        y = i[1]
        copy[1] = x
        copy[2] = y
        if run_code(copy)[0] == 19690720:
            print("Part 2: {}".format(str(100 * x + y)))

def run_code(intcode):
    for i in range(0, len(intcode), 4):
        opcode = intcode[i]
        val1 = intcode[i + 1]
        val2 = intcode[i + 2]
        pos = intcode[i + 3]

        if opcode == 99:
            break;
        elif opcode == 1:
            intcode = add_op(intcode, val1, val2, pos)
        elif opcode == 2:
            intcode = mult_op(intcode, val1, val2, pos)
        else:
            print("Not valid opcode: " + opcode)
            exit(1)

    return intcode
 
def add_op(intcode, val1, val2, pos):
    intcode[pos] = intcode[val1] + intcode[val2]
    return intcode

def mult_op(intcode, val1, val2, pos):
    intcode[pos] = intcode[val1] * intcode[val2]
    return intcode

if __name__ == "__main__":
    main()
