const fs = require('fs')
let input = []
try {
    const data = fs.readFileSync('./input.txt', 'utf8')
    input = data.split('\n')
    input.pop()
} catch (err) {
    console.error(err)
}

//part 1 
firstAnswers = []
for (let i = 0; i < input.length; i++) {
    for (let n = 0; n < input.length; n++) {
        let n1 = parseInt(input[i])
        let n2 = parseInt(input[n])
        if (n1 + n2 === 2020 && i !== n) {         
            firstAnswers = [n1, n2]
            break
        } 
    }
}
console.log("Part 1: " + firstAnswers.reduce( (acc, cur) => {
    return acc * cur
}))

//part 2
secondAnswers = []
for (let i = 0; i < input.length; i++) {
    for (let n = 0; n < input.length; n++) {
        for (let j = 0; j < input.length; j++) {
            let n1 = parseInt(input[i])
            let n2 = parseInt(input[n])
            let n3 = parseInt(input[j])

            if (n1 + n2 + n3 === 2020 && i !== n && i !== j  && n !== j) {
                secondAnswers = [n1, n2, n3]
                break

            }
        }
    }
}
console.log("Part 2: " + secondAnswers.reduce(( acc, cur ) => {
    return acc * cur
}))
