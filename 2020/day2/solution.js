fs = require("fs")
let input = []
try {
    const data = fs.readFileSync('./input.txt', 'utf8') 
    input = data.split('\n') 
    input.pop()
} catch (err) {
    consol.error(err)
}

//part 1
let counter = 0;
for (let i = 0; i < input.length; i++) {
    let splitInstruction = input[i].split(" ")
    let limits = splitInstruction[0].split("-")
    let letter = splitInstruction[1][0]
    let password = splitInstruction[2]

    if (password.includes(letter)) {
        let charCount = password.split('').filter(x => x === letter).length
        if (charCount >= parseInt(limits[0]) && charCount <= parseInt(limits[1])) {
            counter += 1
        }
    } else {
        continue
    }
}
console.log("Part 1: " + counter)

//part 2
counter = 0
for (let i = 0; i < input.length; i++) {
    let splitInstruction = input[i].split(" ")
    let limits = splitInstruction[0].split("-")
    let letter = splitInstruction[1][0]
    let password = splitInstruction[2]

    if (password.includes(letter)) {
        if (password[parseInt(limits[0]) - 1] === letter &&
            password[parseInt(limits[1]) - 1] === letter) {
        } else if (password[parseInt(limits[0]) - 1] === letter ||
            password[parseInt(limits[1]) - 1] === letter) {
            counter += 1 
        } 
    }
}
console.log("Part 2: " + counter)
