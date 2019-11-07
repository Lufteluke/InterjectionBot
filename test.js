const sentenceAnalyser = require('./sentenceAnalyser')

function test (testcase) {
    //console.log(sentenceAnalyser.parseString(testcase, null))
    console.log(sentenceAnalyser.parseMessage({text: testcase, chat: {id: -101}}))
}

//test("hi linux is cool")
//test("lanex")
//test("hello navy")
//est("nsfw")
//test ("lufbot")


//test ("1")
test ("surely, you can be serious")
test ("surely, you can be serious")
test ("surely, you can be serious")
test ("mother")
test ("/quiet")
test ("foxyfluffs")
test ("foxyfluffs are dust on the floor")
test("/unquiet")
test ("foxyfluffs are everything")
//test ("lufbot")
