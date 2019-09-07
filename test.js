const sentenceAnalyser = require('./sentenceAnalyser')

function test (testcase) {
    console.log(sentenceAnalyser.parserString(testcase))
}

test("linux")
test("lanex")
