def main():
    with open('input.txt', 'r') as f:
        directions_list = [x for x in f.read().strip().split('\n')]
        directions = [
            [x for x in directions_list[0].split(',')], 
            [x for x in directions_list[1].split(',')]
        ]
    print(directions)

if __name__ == "__main__":
    main()
