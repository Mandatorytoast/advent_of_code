const fs = require('fs')
let rules = []
const bag = 'shiny gold'
try {
    const data = fs.readFileSync('test.txt', 'utf8')
    rules = data.split('\n')
    rules.pop()
    rules = rules.map(x => convRuleToObj(x))
} catch (err) {
    console.error(err)
}
//part 1
console.log(checkForBag(bag, rules[0], rules))

function checkForBag(bag, rule, ruleSet) { 
    let test = false
    for (let i = 0; i < Object.values(rule)[0].length; i++) {
        if (test === true) {
            return true
        }
        let curBag = Object.values(rule)[0][i][1]
        console.log(curBag)
        if (curBag === bag) {
            return true
        } else {
            curRule = ruleSet.filter(x => String(Object.keys(x)) === curBag)
            test = checkForBag(bag, curRule, ruleSet)
            console.log(test)
        }
    }
    return false
}

function convRuleToObj(rule) {
    let splitRule = rule.split(' ') 
    splitRule = splitRule.filter(x =>  !/bag/i.test(x) && x !== "contain")
    let key = splitRule[0] + " " + splitRule[1]
    let values = []
    for (let i = 2; i < splitRule.length - 2; i += 3){
        let bag = [splitRule[i],  splitRule[i+1] + " " + splitRule[i+2]]
        values.push(bag)
    }
    return {[key]: values}
}
