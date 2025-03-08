// binary -> 0 1
// heximal -> 0 1 2 3 4 5
// octal -> 0 1 2 3 4 5 6 7
// decimal -> 0 1 2 3 4 5 6 7 8 9
// hexadecimal -> 0 1 2 3 4 5 6 7 8 9 a b c d e f

// 10 -> ten(decimal)
// 10 -> three(binary)
// 10 -> six(heximal)
// 10 -> eight(octal)
// 10 -> sixteen(hexadecimal)

// base^place
// 2^4 => 2 * 2 * 2 * 2 => 16
// 16^2 => 16 * 16 => 256
// 2^8 => 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 => 256

// 1 1 1 1 (4 bits / 1 nibble are enough for repersent a hexadecimal number)
// F

// 0 1 0 1 1 1 0 1 (8 bits / 1 byte is enough for repersent two hexadecimal number)
// A F

const number = 0xfff;
console.log(number);
