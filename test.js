const sentenceAnalyser = require("./sentenceAnalyser");

function test(testcase) {
  //console.log(sentenceAnalyser.parseString(testcase, null))
  console.log(
    sentenceAnalyser.parseMessage({ text: testcase, chat: { id: -101 } })
  );
}

//test("hi linux is cool")
//test("lanex")
//test("hello navy")
//est("nsfw")
//test ("lufbot")

//test ("1")
test("surely, you can be serious");
test("surely, you can be serious");
test("echo last");
test("mother");
test("/quiet");
test("foxyfluffs");
test("foxyfluffs are dust on the floor");
test("/unquiet");
test("foxyfluffs are everything");
test("I'm 1celcius");
test("I'm 2,3c dsdd");
test("I'm -3.4c dsdd");
test("I'm 555555 c.");
test("I'm 1000031.00f");
test("1m");
test("3.28feet");
test("4km");
test("2.49 miles");
test("5 km/h");
test("3.11mph");
test("5cm");
test("1,97inches");
test("12 tonnes");
test("13.22 tons");
test("16g ");
test("0.56 ounce");
test("15 Liters");
test("3.30 gallon");
test("5 pounds");
test("2.27 kg.");
test("21111111111111111111111111111111111111.27 kg.");
test(">:3c");
test("500yards");
test("9001 m/s");
test(
  "https://twitter.com/FalseKnees/status/1568310519253049349?s=20&t=8-_wJEQzYtLRW_vYueL5BA"
);
test(
  "Stuff https://twitter.com/FalseKnees/status/1568310519253049349?s=20&t=8-_wJEQzYtLRW_vYueL5BA and things"
);
test(
  "Stuff https://twitter.com/FalseKnees/status/1568310519253049349 and things"
);
test(
  "Stuff https://fxtwitter.com/FalseKnees/status/1568310519253049349 and things"
);

//test ("lufbot")
