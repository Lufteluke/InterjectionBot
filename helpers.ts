const rxB = "(^|\\s)(-?\\d{1,25})\\.?,?(\\d{0,10})\\s?";
const rxE = "($|\\W)";

function convert(
  formula: (n: number) => number,
  string: string,
  fromText: string,
  toText: string,
  regex: string,
): string | null {
  const regex2 = new RegExp(rxB + regex);
  const regexMatch = string.match(regex2);
  if (regexMatch) {
    const fromValue = parseFloat(regexMatch[2] + "." + regexMatch[3]);
    return (
      fromValue.toFixed(2) +
      " " +
      fromText +
      " is " +
      formula(fromValue).toFixed(2) +
      " " +
      toText
    );
  }
  return null;
}

//temp
function cToF(c: number): number {
  return (c * 9) / 5 + 32;
}
function fToC(f: number): number {
  return ((f - 32) * 5) / 9;
}

//length
function mToFeet(m: number): number {
  return m * 3.281;
}
function feetToM(f: number): number {
  return f / 3.281;
}
function yardToM(yd: number): number {
  return yd / 1.094;
}
function cmToInch(cm: number): number {
  return cm / 2.54;
}
function inchToCm(inch: number): number {
  return inch * 2.54;
}
function kmToMile(km: number): number {
  return km / 1.609;
}
function mileToKm(mile: number): number {
  return mile * 1.609;
}
function msToKmh(ms: number): number {
  return ms * 3.6;
}

//weight
function kgToPound(kg: number): number {
  return kg * 2.205;
}
function poundToKg(pound: number): number {
  return pound / 2.205;
}
function tonneToTon(tonne: number): number {
  return tonne * 1.102;
}
function tonToTonne(ton: number): number {
  return ton / 1.102;
}
function gramToOunce(gram: number): number {
  return gram / 28.35;
}
function ounceToGram(ounce: number): number {
  return ounce * 28.35;
}

//volume
function literToGallon(liter: number): number {
  return liter / 4.546;
}
function gallonToLiter(gallon: number): number {
  return gallon * 4.546;
}

export function lookForConversions(string: string): string | null {
  //temp
  let convertMatch = convert(
    fToC,
    string,
    "\u00B0f",
    "\u00B0c",
    "(fahrenheit|f" + rxE + ")",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    cToF,
    string,
    "\u00B0c",
    "\u00B0f",
    "(celcius|centigrade|c" + rxE + ")",
  );
  if (convertMatch != null) return convertMatch;

  //length
  convertMatch = convert(
    msToKmh,
    string,
    "m/s",
    "km/h",
    "(m/s|mps|meters per second)",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    mToFeet,
    string,
    "meters",
    "feet",
    "(meter|m" + rxE + ")",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    feetToM,
    string,
    "feet",
    "meters",
    "(feet|foot|ft" + rxE + ")",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    yardToM,
    string,
    "yards",
    "meters",
    "(yard|yd" + rxE + ")",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(kmToMile, string, "km/h", "mph", "km(p|/)h" + rxE);
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(mileToKm, string, "mph", "km/h", "mph" + rxE);
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    kmToMile,
    string,
    "km",
    "miles",
    "(km" + rxE + "|kilomet)",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(mileToKm, string, "miles", "km", "mile");
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    cmToInch,
    string,
    "cm",
    "inches",
    "(cm" + rxE + "|centimet)",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    inchToCm,
    string,
    "inches",
    "cm",
    "(in" + rxE + "|inch)",
  );
  if (convertMatch != null) return convertMatch;

  //weight
  convertMatch = convert(
    tonneToTon,
    string,
    "metric tonnes",
    "US tons",
    "tonne",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(tonToTonne, string, "US tons", "metric tonnes", "ton");
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    gramToOunce,
    string,
    "grams",
    "ounces",
    "(g" + rxE + "|gram)",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(ounceToGram, string, "ounces", "grams", "ounce");
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(
    kgToPound,
    string,
    "kg",
    "pounds",
    "(kg" + rxE + "|kilogram)",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(poundToKg, string, "pounds", "kg", "pound");
  if (convertMatch != null) return convertMatch;

  //volume
  convertMatch = convert(
    literToGallon,
    string,
    "liters",
    "gallons",
    "(liter|l" + rxE + ")",
  );
  if (convertMatch != null) return convertMatch;
  convertMatch = convert(gallonToLiter, string, "gallons", "liters", "gallon");
  return convertMatch;
}
