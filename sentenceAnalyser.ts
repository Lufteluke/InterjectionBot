import { rules, ignorePatterns } from "./match";
import { lookForConversions } from "./helpers";

interface TelegramMessage {
  text: string;
  chat: { id: number };
}

const chatIgnoreArrays = new Map<number, boolean[]>();
const defaultIgnoreArray: boolean[] = new Array(rules.length).fill(false);

export function parseMessage(message: TelegramMessage): string {
  const { text } = message;
  const cId = message.chat.id;

  if (!chatIgnoreArrays.has(cId)) {
    chatIgnoreArrays.set(cId, new Array(rules.length + 1).fill(false));
    console.log("Making new array for chat ID " + cId);
  }

  const iArray = chatIgnoreArrays.get(cId)!;
  return parseString(text.toLowerCase(), iArray);
}

export function parseString(
  string: string,
  iArray: boolean[] | null = null,
): string {
  const arr = iArray ?? [...defaultIgnoreArray];

  if (string.includes("/quiet")) {
    arr.fill(true);
    return "\uD83E\uDD10";
  }

  if (string.includes("/unquiet")) {
    arr.fill(false);
    return "Waffle daffle submarine";
  }

  if (!arr[rules.length]) {
    const retVal = lookForConversions(string);
    if (retVal != null) return retVal;
  }

  const twitterRx = string.match(
    /https:\/\/(?:twitter\.com|x\.com)(\/\S+\/\d+)/,
  );
  if (twitterRx) {
    return `https://fxtwitter.com${twitterRx[1]}`;
  }

  if (string.includes("@")) {
    if (string.includes("@interjectionbot")) {
      return "Hi~";
    }
    return "";
  }

  for (const ignoreRule of ignorePatterns) {
    if (ignoreRule.test(string)) {
      return "";
    }
  }

  for (let i = 0; i < rules.length; i++) {
    if (!arr[i] && rules[i].pattern.test(string)) {
      arr[i] = true;
      return rules[i].response;
    }
  }

  if (Math.random() < 0.01) return sarcasm(string);
  return "";
}

function sarcasm(input: string): string {
  const split = input.split("");
  for (let i = 0; i < split.length; i++) {
    if (i % 2 === 1) split[i] = split[i].toUpperCase();
  }
  return split.join("");
}
