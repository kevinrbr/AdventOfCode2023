const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8");

const result = data
                .split("\n")
                .map(v => v.replace(/\D/g,''))
                .map(n => n.length === 1 ? n + n : n[0] + n[n.length  - 1]).reduce((a,b) => +a + +b, 0);

console.log(result);