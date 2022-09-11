const match = require('./match.js')
let rules = match.pairs
let antirules = match.ignore
let chatIgnoreArrays = [[-1, Array(rules.length).fill(false)]]
let ignoreArray = chatIgnoreArrays[0][1]
const rxB = "(^|\\s)(-?\\d{1,25})\\.?,?(\\d{0,10})\\s?" //base and number catch
const rxE = '($|\\W)' //end of word

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
        chatIgnoreArrays.push([cId, Array(rules.length + 1).fill(false)]) //it's +1 because of convert function
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
        const retVal = lookForConversions(string)
        if (retVal != null) return retVal 
    }

    const rx = [...string.matchAll(/^(.*?)(https:\/\/)(twitter\.com\/)(.+?\/?\d+)(\?\S*)*(.*)/g)]
    if (rx.length > 0) {        
        return (`${rx[0][1]}${rx[0][2]}fx${rx[0][3]}${rx[0][4]}${rx[0][6]}`)
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

    if (Math.random() < 0.01) return sarcasm(string);
    return ""
}

function sarcasm(input) {
    let split = input.split('');
    for (let i = 0; i < split.length; i++) {
        if(i % 2 == 1) split[i] = split[i].toUpperCase();
    }
    return split.join('');
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

function lookForConversions(string) {
    //temp
    // var convertMatch = convert(fToC, string, "°f", "°c", /(?>^|\s)(-?\d{1,25})\.?,?(\d{0,10})\s?(?>fahrenheit|f(?>$|\W))/)
    var convertMatch = convert(fToC, string, "°f", "°c", "(fahrenheit|f" + rxE + ")")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(cToF, string, "°c", "°f", "(celcius|centigrade|c" + rxE + ")")
    if (convertMatch != null) return convertMatch

    //length
    convertMatch = convert(mToFeet, string, "meters", "feet", "(meter|m" + rxE + ")")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(feetToM, string, "feet", "meters", "(feet|foot|ft" + rxE + ")")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(yardToM, string, "yards", "meters", "(yard|yd" + rxE + ")")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(kmToMile, string, "km/h", "mph", "km(p|\/)h" + rxE)
    if (convertMatch != null) return convertMatch
    convertMatch = convert(mileToKm, string, "mph", "km/h", "mph" + rxE)
    if (convertMatch != null) return convertMatch
    convertMatch = convert(msToKmh, string, "m/s", "km/h", "(m/s|mps|meters per second)")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(kmToMile, string, "km", "miles", "(km" + rxE + "|kilomet)")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(mileToKm, string, "miles", "km", "mile")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(cmToInch, string, "cm", "inches", "(cm" + rxE + "|centimet)")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(inchToCm, string, "inches", "cm", "(in" + rxE + "|inch)")
    if (convertMatch != null) return convertMatch

    //weight
    convertMatch = convert(tonneToTon, string, "metric tonnes", "US tons", "tonne")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(tonToTonne, string, "US tons", "metric tonnes", "ton")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(gramToOunce, string, "grams", "ounces", "(g" + rxE + "|gram)")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(ounceToGram, string, "ounces", "grams", "ounce")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(kgToPound, string, "kg", "pounds", "(kg" + rxE + "|kilogram)")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(poundToKg, string, "pounds", "kg", "pound")
    if (convertMatch != null) return convertMatch

    //volume
    convertMatch = convert(literToGallon, string, "liters", "gallons", "(liter|l" + rxE + ")")
    if (convertMatch != null) return convertMatch
    convertMatch = convert(gallonToLiter, string, "gallons", "liters", "gallon")
    return convertMatch // must be last
}

function convert(formula, string, fromText, toText, regex) {
    const regex2 = new RegExp(rxB + regex)
    regexMatch = string.match(regex2)
    if (regexMatch) {
        const fromValue = parseFloat(regexMatch[2] + "." + regexMatch[3])
        return fromValue.toFixed(2) + " " + fromText + " is " + formula(fromValue).toFixed(2) + " " + toText
    }
    return null
}

//temp
function cToF(c) {
    return (c * 9 / 5) + 32
}
function fToC(f) {
    return (f - 32) * 5 / 9
}

//length
function mToFeet(m) {
    return m * 3.281
}
function feetToM(f) {
    return f / 3.281
}
function yardToM(yd) {
    return yd / 1.094
}
function cmToInch(cm) {
    return cm / 2.54
}
function inchToCm(inch) {
    return inch * 2.54
}
function kmToMile(km) {
    return km / 1.609
}
function mileToKm(mile) {
    return mile * 1.609
}
function msToKmh(ms) {
    return ms * 3.6
}

//weight
function kgToPound(kg) {
    return kg * 2.205
}
function poundToKg(pound) {
    return pound / 2.205
}
function tonneToTon(tonne) {
    return tonne * 1.102
}
function tonToTonne(ton) {
    return ton / 1.102
}
function gramToOunce(gram) {
    return gram / 28.35
}
function ounceToGram(ounce) {
    return ounce * 28.35
}

//volume
function literToGallon(liter) {
    return liter / 4.546
}
function gallonToLiter(gallon) {
    return gallon * 4.546
}