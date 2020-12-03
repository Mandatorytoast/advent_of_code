const fs = require('fs')
mapArr = []
try {
    const data = fs.readFileSync('input.txt', 'utf8')
    mapArr = data.split('\n')
    mapArr.pop()
} catch (err) {
    console.error(err)
}

//part 1


console.log("Part 1: " + simulateSlope(3, 1, mapArr))

//part 2 

const instructions = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
let acc = 1
for (let i = 0; i < instructions.length; i++) {
    acc *= simulateSlope(instructions[i][0], instructions[i][1], mapArr)
}

console.log("Part 2: " + acc)

function simulateSlope(xStep, yStep, map) {
    let xpos = 0
    let trees = 0
    for (let i = 0; i < map.length; i += yStep) {
        if (mapArr[i][xpos] === '#') {
            trees++
        }
        xpos = calculateXPos( mapArr[0].length, xpos, xStep )
    }
    return trees

}

function calculateXPos(xLength, currentXPos, step) {
    for (let i = 0; i < step; i++) {
        currentXPos ++
        if (currentXPos > xLength - 1){
            currentXPos = 0
        }
    }
    return currentXPos
}


