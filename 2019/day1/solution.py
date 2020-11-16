def main():
    with open('input.txt', 'r') as my_file:
        file_list = tuple(map(int, my_file.read().strip().split('\n')))

    part1 = [calculate_fuel_amount(x) for x in file_list]
    part2 = [calculate_recursive_fuel_amount(x) for x in file_list]

    print("Part one: " + str(sum(part1)))
    print("Part two: " + str(sum(part2)))
        
def calculate_recursive_fuel_amount(mass): 
    fuel = calculate_fuel_amount(mass)
    if calculate_fuel_amount(fuel) <= 0:
        return fuel
    else:
        return fuel + calculate_recursive_fuel_amount(fuel);

def calculate_fuel_amount(mass):
    new_mass = (mass // 3) - 2
    return new_mass

if __name__ == "__main__":
    main()    
