import { parseString } from "./sentenceAnalyser";

let passed = 0;
let failed = 0;

function expect(input: string, expected: string, description?: string): void {
  const result = parseString(input.toLowerCase());
  const label = description ?? `"${input}" → "${expected}"`;
  if (result === expected) {
    passed++;
  } else {
    failed++;
    console.error(`FAIL: ${label}`);
    console.error(`  expected: "${expected}"`);
    console.error(`  got:      "${result}"`);
  }
}

function expectContains(
  input: string,
  substring: string,
  description?: string,
): void {
  const result = parseString(input.toLowerCase());
  const label = description ?? `"${input}" contains "${substring}"`;
  if (result.includes(substring)) {
    passed++;
  } else {
    failed++;
    console.error(`FAIL: ${label}`);
    console.error(`  expected to contain: "${substring}"`);
    console.error(`  got: "${result}"`);
  }
}

// --- Rule matching ---
expectContains("navy", "Navy Seals", "navy copypasta");
expect(
  "octagon",
  "An octagon has 8 awesome angles. https://youtu.be/7ziWe_oNb58",
);
expect("cash money", "This is so not cash money! https://youtu.be/YSWKtuaV2fY");
expect("too hot", "The sun is too hot! https://youtu.be/XhIBegli6dE");
expect(
  "tranquil",
  "I need peace and tranquility! https://youtu.be/SHvhps47Lmc",
);
expect("beep", "boop");
expect("bleep", "bloop");
expect("/ping", "pong");
expect("magpie", "*Piemag");
expect("raccoon", "*Washbear");
expect("hedgehog", "*Hodgehedge");
expect("hyena", "*Yeen");
expect("coyote", "*Yoot");
expect("breathtaking", "You're breathtaking!");
expect("jackdaw", "Jackdaws are precious.");
expect("trains", "I like trains.");
expect("awoo", "Awoooooo~");
expect("eat shit", "and die");

// --- OR matching ---
expect(
  "moth",
  "Hey Josh, look at this huge moth that I found https://youtu.be/iUJ8r4ReHog",
);
expect(
  "josh",
  "Hey Josh, look at this huge moth that I found https://youtu.be/iUJ8r4ReHog",
);
expect("bodywash", "POOOOWEEEEER https://youtu.be/XpJvLd2H65U");
expect("old spice", "POOOOWEEEEER https://youtu.be/XpJvLd2H65U");
expect("pragnent", "How is pragnent formed? https://youtu.be/EShUeudtaFg");
expect("pregnant", "How is pragnent formed? https://youtu.be/EShUeudtaFg");

// --- AND matching (lookaheads) ---
expectContains("I use gnu and linux", "Proud of you!", "gnu AND linux");
expectContains(
  "surely you can be serious right",
  "don't call me Shirley",
  "shirley AND match",
);
expectContains("shit sorry about that", "Oh shit, I'm sorry", "shit AND sorry");
expectContains("dream and cry", "Best song!", "dream AND cry");
expectContains("sharing is caring", "Shaaaaaring!", "sharing AND caring");
expectContains(
  "foxy fluff ball",
  "Foxyfluffs are dust on the floor",
  "foxy AND fluff",
);
expectContains(
  "foxy fluff everything",
  "Foxyfluffs are motion tweens",
  "foxy AND fluff AND everything",
);
expectContains(
  "foxy fluff dust",
  "Foxyfluffs are everything",
  "foxy AND fluff AND dust",
);

// --- AND should not match with only one term ---
expect("gnu", "", "gnu alone should not match gnu+linux rule");
expect("sharing alone", "", "sharing alone should not match sharing+caring");

// --- Ignore rules ---
expect("mother", "", "ignore rule: mother");

// --- Twitter/X link rewriting ---
expect(
  "https://twitter.com/FalseKnees/status/1568310519253049349",
  "https://fxtwitter.com/falseknees/status/1568310519253049349",
  "twitter.com → fxtwitter.com",
);
expect(
  "Stuff https://twitter.com/FalseKnees/status/1568310519253049349 and things",
  "https://fxtwitter.com/falseknees/status/1568310519253049349",
  "twitter.com in context",
);
expect(
  "https://x.com/Someone/status/123456789",
  "https://fxtwitter.com/someone/status/123456789",
  "x.com → fxtwitter.com",
);
expect(
  "Check this https://x.com/User/status/99999 out",
  "https://fxtwitter.com/user/status/99999",
  "x.com in context",
);
// Already fixed links should not be rewritten
expect(
  "Stuff https://fxtwitter.com/FalseKnees/status/1568310519253049349 and things",
  "",
  "fxtwitter.com should not be rewritten",
);

// --- @ handling ---
expect("@interjectionbot", "Hi~", "mention bot");
expect("hey @someoneelse", "", "@ mention other user silences bot");

// --- Unit conversions ---
expect("1celcius", "1.00 °c is 33.80 °f", "celsius to fahrenheit");
expect("2,3c dsdd", "2.30 °c is 36.14 °f", "comma decimal celsius");
expect("-3.4c dsdd", "-3.40 °c is 25.88 °f", "negative celsius");
expect("1000031.00f", "1000031.00 °f is 555555.00 °c", "fahrenheit to celsius");
expect("1m", "1.00 meters is 3.28 feet", "meters to feet");
expect("3.28feet", "3.28 feet is 1.00 meters", "feet to meters");
expect("4km", "4.00 km is 2.49 miles", "km to miles");
expect("2.49 miles", "2.49 miles is 4.01 km", "miles to km");
expect("5 km/h", "5.00 km/h is 3.11 mph", "km/h to mph");
expect("3.11mph", "3.11 mph is 5.00 km/h", "mph to km/h");
expect("5cm", "5.00 cm is 1.97 inches", "cm to inches");
expect("1,97inches", "1.97 inches is 5.00 cm", "inches to cm");
expect("12 tonnes", "12.00 metric tonnes is 13.22 US tons", "tonnes to tons");
expect("13.22 tons", "13.22 US tons is 12.00 metric tonnes", "tons to tonnes");
expect("16g ", "16.00 grams is 0.56 ounces", "grams to ounces");
expect("0.56 ounce", "0.56 ounces is 15.88 grams", "ounces to grams");
expect("15 liters", "15.00 liters is 3.30 gallons", "liters to gallons");
expect("3.30 gallon", "3.30 gallons is 15.00 liters", "gallons to liters");
expect("5 pounds", "5.00 pounds is 2.27 kg", "pounds to kg");
expect("2.27 kg.", "2.27 kg is 5.01 pounds", "kg to pounds");
expect("500yards", "500.00 yards is 457.04 meters", "yards to meters");
expect("9001 m/s", "9001.00 m/s is 32403.60 km/h", "m/s to km/h");

// --- No match ---
expect(">:3c", "", "emoticon should not trigger conversion");

// --- Quiet / Unquiet ---
// These use parseString with a shared array to test state
import { parseMessage } from "./sentenceAnalyser";
const chatId = -999;
const msg = (text: string) => parseMessage({ text, chat: { id: chatId } });

const quietResult = msg("/quiet");
if (quietResult === "\uD83E\uDD10") {
  passed++;
} else {
  failed++;
  console.error("FAIL: /quiet should return zipper mouth");
}

const duringQuiet = msg("beep");
if (duringQuiet === "") {
  passed++;
} else {
  failed++;
  console.error("FAIL: should be silent after /quiet");
}

const unquietResult = msg("/unquiet");
if (unquietResult === "Waffle daffle submarine") {
  passed++;
} else {
  failed++;
  console.error("FAIL: /unquiet response");
}

const afterUnquiet = msg("beep");
if (afterUnquiet === "boop") {
  passed++;
} else {
  failed++;
  console.error("FAIL: beep should work after /unquiet");
}

// --- Summary ---
console.log(`\n${passed} passed, ${failed} failed, ${passed + failed} total`);
if (failed > 0) process.exit(1);
