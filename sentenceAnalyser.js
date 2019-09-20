const match = require('./match.js')

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
    
    var pairs = match.pairs

    for (let index = 0; index < pairs.length; index++) {
        if (string.includes(pairs[index][0])) {
            return pairs[index][1]
        }
    }
    return ""
}