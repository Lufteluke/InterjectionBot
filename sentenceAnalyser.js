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
        if (!ignoreArray[i] && matchList(rule[i][0], string, false)) {
            ignoreArray[i] = true
            return rule[i][1]
        }
    }
    return ""
}

function matchList(match, src, matchAll) {
    let retVal = matchAll
    
    if (Array.isArray(match)) {
        for (let j = 0; j < match.length; j++) {
            let check = matchList(match[j], src, !matchAll)
            retVal = (retVal && check) || (!matchAll && (check || retVal))
        }
        return retVal
    }
    else {
        return src.includes(match)
    }
}