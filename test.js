const sentenceAnalyser = require('./sentenceAnalyser')

function test (testcase) {
    console.log(sentenceAnalyser.parseString(testcase))
}

test("hi linux is cool")
test("lanex")
test("hello navy")
