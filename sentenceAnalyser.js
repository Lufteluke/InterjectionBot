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
        chatIgnoreArrays.push([cId, Array(rules.length+1).fill(false)]) //it's +1 because of convert function
            console.log("Making new array for chat ID " + cId)
            iArray = chatIgnoreArrays[chatIgnoreArrays.length - 1][1]
    }
    return exports.parseString(text.toLowerCase(), iArray)
}

module.exports.parseString = function (string, iArray) {
    if (iArray == null) {
        iArray = ignoreArray
    }

    


    if (string.includes("/quiet")) {
        iArray.fill(true)
        return "🤐"
    }

    if (string.includes("/unquiet")) {
        iArray.fill(false)
        return "Waffle daffle submarine"
    }
    
    if (!iArray[rules.length]) {

        //temp
        var convertMatch = convert(fToC, string, "°f", "°c", /(-?\d{1,25})\.?,?(\d{0,10})\s?(fahrenheit|f($|\W))/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(cToF, string, "°c", "°f", /(-?\d{1,25})\.?,?(\d{0,10})\s?(celcius|centigrade|c($|\W))/)
        if (convertMatch != null) return convertMatch

        //length
        convertMatch = convert(mToFeet, string, "meter", "feet", /(-?\d{1,25})\.?,?(\d{0,10})\s?(meter|m($|\W))/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(feetToM, string, "feet", "meter", /(-?\d{1,25})\.?,?(\d{0,10})\s?(feet|foot)/)
        if (convertMatch != null) return convertMatch

        convertMatch = convert(kmToMile, string, "km/h", "mph", /(-?\d{1,25})\.?,?(\d{0,10})\s?km(p|\/)h/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(mileToKm, string, "mph", "km/h", /(-?\d{1,25})\.?,?(\d{0,10})\s?mph/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(kmToMile, string, "km", "miles", /(-?\d{1,25})\.?,?(\d{0,10})\s?(km|kilomet)/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(mileToKm, string, "miles", "km", /(-?\d{1,25})\.?,?(\d{0,10})\s?mile/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(cmToInch, string, "cm", "inches", /(-?\d{1,25})\.?,?(\d{0,10})\s?(cm|centimet)/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(inchToCm, string, "inches", "cm", /(-?\d{1,25})\.?,?(\d{0,10})\s?inch/)
        if (convertMatch != null) return convertMatch

        //weight
        convertMatch = convert(tonneToTon, string, "metric tonnes", "US tons", /(-?\d{1,25})\.?,?(\d{0,10})\s?tonne/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(tonToTonne, string, "US tons", "metric tonnes", /(-?\d{1,25})\.?,?(\d{0,10})\s?ton/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(gramToOunce, string, "grams", "ounces", /(-?\d{1,25})\.?,?(\d{0,10})\s?(gram|g($|\W))/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(ounceToGram, string, "ounces", "grams", /(-?\d{1,25})\.?,?(\d{0,10})\s?ounce/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(kgToPound, string, "kg", "pounds", /(-?\d{1,25})\.?,?(\d{0,10})\s?(kg|kilogram)/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(poundToKg, string, "pounds", "kg", /(-?\d{1,25})\.?,?(\d{0,10})\s?pound/)
        if (convertMatch != null) return convertMatch

        //volume
        convertMatch = convert(literToGallon, string, "liters", "gallons", /(-?\d{1,25})\.?,?(\d{0,10})\s?(liter|l($|\W))/)
        if (convertMatch != null) return convertMatch
        convertMatch = convert(gallonToLiter, string, "gallons", "liters", /(-?\d{1,25})\.?,?(\d{0,10})\s?gallon/)
        if (convertMatch != null) return convertMatch
    }


    


    if (string.includes("@")) {
        if (string.includes("@interjectionbot")) {
            return "Hi~"
        }
        return ""
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

function convert(formula, text, fromText, toText, regex) {
    regexMatch = text.match(regex)
    if (regexMatch) {
        var fromValue = parseFloat(regexMatch[1] + "." + regexMatch[2])
        return fromValue.toFixed(2) + " " + fromText + " is " + formula(fromValue).toFixed(2) + " " + toText
    }
    return null
}

//temp
function cToF (c) {
    return (c * 9/5) + 32
}
function fToC (f) {
    return (f - 32) * 5/9
}

//length
function mToFeet (m) {
    return m*3.281
}
function feetToM (f) {
    return f/3.281
}
function cmToInch (cm) {
    return cm/2.54
}
function inchToCm (inch) {
    return inch*2.54
}
function kmToMile (km) {
    return km/1.609
}
function mileToKm (mile) {
    return mile*1.609
}

//weight
function kgToPound (kg) {
    return kg*2.205
}
function poundToKg (pound) {
    return pound/2.205
}
function tonneToTon (tonne) {
    return tonne*1.102
}
function tonToTonne (ton) {
    return ton/1.102
}
function gramToOunce (gram) {
    return gram/28.35
}
function ounceToGram (ounce) {
    return ounce*28.35
}

//volume
function literToGallon (liter) {
    return liter/4.546
}
function gallonToLiter (gallon) {
    return gallon*4.546
}