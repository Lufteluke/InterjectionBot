const match = require('./match.js')
let rules = match.pairs
let antirules = match.ignore
let chatIgnoreArrays = [[-1, Array(rules.length).fill(false)]]
let ignoreArray = chatIgnoreArrays[0][1]
var lastMessage = null


module.exports.parseMessage = function (message) {
    const { text } = message
    const cId = message.chat.id
    let iArray = ignoreArray
    let foundId = false

    for (let i = 0; i < chatIgnoreArrays.length; i++) {
        if (chatIgnoreArrays[i][0] == cId) {
            iArray = chatIgnoreArrays[i][1]
            foundId = true
            break
        }
    }

    if (!foundId) {
        chatIgnoreArrays.push([cId, Array(rules.length).fill(false)])
            console.log("Making new array for chat ID " + cId)
            iArray = chatIgnoreArrays[chatIgnoreArrays.length - 1][1]
    }
    var retVal = exports.parseString(text.toLowerCase(), iArray)
    lastMessage = message
    return retVal
}

module.exports.parseString = function (string, iArray) {
    if (iArray == null) {
        iArray = ignoreArray;
    }

    if (string.includes("/quiet")) {
        iArray.fill(true)
        return "🤐"
    }

    else if (string.includes("/quiet")) {
        iArray.fill(true)
        return "🤐"
    }

    else if (string.includes("/unquiet")) {
        iArray.fill(false)
        return "Waffle daffle submarine"
    }

    else if (string.includes("@")) {
        if (string.includes("@interjectionbot")) {
            return "Hi~"
        }
        return ""
    }

    else if (string.includes("echo last")) {
        return JSON.stringify(lastMessage)
    }


    for (let i = 0; i < antirules.length; i++) {
        if (matchList(antirules[i], string, false)) {
            return ""
        }
    }

    for (let i = 0; i < rules.length; i++) {
        if (!iArray[i] && matchList(rules[i][0], string, false)) {
            iArray[i] = true
            return rules[i][1]
        }
    }
    return ""
}

function matchList(match, src, matchAll) {
    let retVal = matchAll

    if (Array.isArray(match)) {
        for (let i = 0; i < match.length; i++) {
            let check = matchList(match[i], src, !matchAll)
            retVal = (retVal && check) || (!matchAll && (check || retVal))
        }
        return retVal
    }
    else {
        return src.includes(match)
    }
}