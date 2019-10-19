const match = require('./match.js')
let ignoreArray = Array(60).fill(false)


module.exports.parseMessage = function (message) {
    const { text } = message
    return exports.parseString(text.toLowerCase())
}

module.exports.parseString = function (string) {

    if (string.includes("@")) {
        if (string.includes("@interjectionbot")) {
            return "Hi~"
        }
        return ""
    }
    
    let rule = match.pairs

    for (let i = 0; i < rule.length; i++) {
        //console.log(i + ": " + rule[i][1])
        if (!ignoreArray[i] && matchList(rule[i][0], string, false)) {
            //console.log("Correct: (" + i+ ")" + JSON.stringify(rule[i][1]))
            return rule[i][1]
        }
    }
    return ""
}

function matchList(match, src, matchAll) {
    let retVal = matchAll
    
    if (Array.isArray(match)) {
        //console.log("Array start " + (matchAll? "(all)" : "(any)") )
        for (let j = 0; j < match.length; j++) {
            //console.log("Array item start " + (matchAll? "(all): ":"(any): ") + JSON.stringify(match[j]))
            let check = matchList(match[j], src, !matchAll)
            retVal = (retVal && check) || (!matchAll && (check || retVal))
            //console.log("Retval: " + retVal, ". Matchall: " + matchAll)
        }
        //console.log("Array end: " + retVal)
        return retVal
    }
    else {
        //console.log(src + " > " + match + " " + src.includes(match))
        return src.includes(match);
    }
}