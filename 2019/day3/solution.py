def main():
    with open('input.txt', 'r') as f:
        directions_list = [x for x in f.read().strip().split('\n')]
        directions = (
            tuple(x for x in directions_list[0].split(',')), 
            tuple(x for x in directions_list[1].split(','))
        )
        wire1 = [(0,0)]
        wire2 = [(0,0)]
        for i in directions[0]:
            wire1 = wire1 + interperate_instruction(i, wire1[-1])
        for i in directions[1]:
            wire2 = wire2 + interperate_instruction(i, wire2[-1])

        del wire1[0]
        del wire2[0]
        common = tuple(set(wire1).intersection(wire2))
        distances = [abs(x) + abs(y) for (x, y) in common]
        steps = [calculate_steps(wire1, wire2, x) for x in common]
        print("Part 1: " + str(min(distances)))
        print("Part 2: " + str(min(steps)))
        
def calculate_steps(wire1, wire2, intersection):
    return wire1.index(intersection) + wire2.index(intersection) + 2

def interperate_instruction(ins, current_pos):
    direction = ins[0]
    try:
        length = int(ins[1:])
    except ValueError:
        print("Unkown instruction format, can't convert {} to int".format(ins[1:]))
        quit()
    if direction.lower() == 'r':
        return [(x + 1, current_pos[1]) for x in range(current_pos[0], current_pos[0] + length)]
    elif direction.lower() == 'l':
        return [(x - 1, current_pos[1]) for x in range(current_pos[0], current_pos[0] - length, -1)]
    elif direction.lower() == 'u':
        return [(current_pos[0], x + 1) for x in range(current_pos[1], current_pos[1] + length)]
    elif direction.lower() == 'd':
        return [(current_pos[0], x - 1) for x in range(current_pos[1], current_pos[1] - length, -1)]
    else:
        print("Unknown instruction: {}".format(ins))
        quit()

if __name__ == "__main__":
    main()
