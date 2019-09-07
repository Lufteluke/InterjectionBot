module.exports.parseMessage = function (message) {
    const { text } = message
    return parserString(text)
}

module.exports.parserString = function (string) {
    const split = string.toLowerCase().split(' ')

    for (let index = 0; index < split.length; index++) {

        switch (split[index]) {
            case "linux":
                return "linux is not unix"

            default:
                return "no linux detected"
        }
    }
}