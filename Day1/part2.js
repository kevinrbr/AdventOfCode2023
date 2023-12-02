const fs = require("fs");

const data = fs.readFileSync("Day1/input.txt", "utf-8");

const numbersInLetters = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
]

const test = (v) => {
    for([index, n] of numbersInLetters.entries()) {
        if (v.includes(n)) {
            v = v.replaceAll(n, n[0] + index + n[n.length -1]);
        }
    }
    return v;
}

const result = data
                .split("\n")
                .map(v => test(v))
                .map(v => v.replace(/\D/g,''))
                .map(n => n.length === 1 ? n + n : n[0] + n[n.length  - 1])
                .reduce((a,b) => +a + +b, 0);
                

console.log(result);