function convertToRoman(num) {
  if (!Number.isInteger(num) || num <= 0) {
    return "Error: Must give positive integer";
  }

  let digits = num.toString().split("");
  let romanArray = [];
  let mag = 0;
  let currNum = 0;
  while (mag <= 2 && digits.length > 0) {
    currNum = parseInt(digits.pop());
    romanArray.unshift(convertDigit(currNum, mag));
    mag++;
  }
  if (digits.length > 0) {
    romanArray.unshift("M".repeat(parseInt(digits.join(""))));
  }
  return romanArray.join("");
}

function convertDigit(num, mag) {
  let romans = ["I", "V", "X", "L", "C", "D", "M"];
  let index = 2 * mag;
  if (num === 0) {
    return "";
  }
  if (num >= 1 && num <= 3) {
    return romans[index].repeat(num);
  }
  if (num === 4) {
    return romans[index] + romans[index + 1];
  }
  if (num === 5) {
    return romans[index + 1];
  }
  if (num >= 6 && num <= 8) {
    return romans[index + 1] + romans[index].repeat(num - 5);
  }
  if (num === 9) {
    return romans[index] + romans[index + 2];
  }
}

console.log(convertToRoman(4569));
