const fs = require('fs')
let groupData = []
try {
    const data = fs.readFileSync('input.txt', 'utf8')
    const groups = data.split('\n\n')
    groups.forEach( x => {
        groupData.push(x.split('\n'))
    })
} catch (err) {
    console.error(err)
}

//part 1
let groupedYesAnswers = groupData.map(x => filterDuplicates(x).length)
let totalYesAnswers = groupedYesAnswers.reduce((acc, cur) => {
    return acc + cur
})
console.log("Part 1: " + totalYesAnswers)

//part 2
groupedYesAnswers = groupData.map(x => getDuplicates(x).length)
totalYesAnswers = groupedYesAnswers.reduce((acc, cur) => {
    return acc + cur
})
console.log("Part 2: " + totalYesAnswers)

function filterDuplicates(groupAnswers) {
    let common = groupAnswers[0].split('')
    for( let i = 1; i < groupAnswers.length; i++ ) {
        common = common.concat(groupAnswers[i].split('').filter(x => !common.includes(x)))
    }
    return common
}

function getDuplicates(groupAnswers) {
    let common = groupAnswers[0].split('')
    for ( let i = 1; i < groupAnswers.length; i++ ) {
        common = common.filter(x => groupAnswers[i].split('').includes(x))
    }
    return common
}
