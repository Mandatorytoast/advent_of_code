const fs = require('fs')
let inputs = []
try {
    const data = fs.readFileSync('input.txt', 'utf8')
    inputs = data.split('\n')
    inputs.pop()
} catch (err) {
    console.error(err)
}
//part 1
let IDs = []
for (let i = 0; i < inputs.length; i++) {
    let id = calculateSeat(inputs[i])[2]
    IDs.push(id)
}
console.log("Part 1: " + Math.max(...IDs))

//part 2
let complete = []
for (let i = Math.min(...IDs); i < Math.max(...IDs) + 1; i++) {
    complete.push(i)
}

const missing = complete.filter(x => !IDs.includes(x))
console.log("Part 2: " + missing[0])

function calculateSeat(bsp) {
    let row = [0, 127]
    let col = [0, 7]
    for (let i = 0; i < bsp.length; i++) {
        switch (bsp.charAt(i)) {
            case "F" :
                row[1] = Math.floor((row[1] + row[0]) / 2)
                break
            case 'B':
                row[0] = Math.ceil((row[1] + row[0]) / 2)
                break
            case 'R' :
                col[0] = Math.ceil((col[1] + col[0]) /2)
                break
            case 'L' :
                col[1] = Math.floor((col[1] + col[0]) / 2)
                break
        } 
    }
    if (row[0] === row[1] && col[0] === col[1]) {
        return [row[0], col[0], row[0] * 8 + col[0]]
    } else {
        return 9999
    }
}

