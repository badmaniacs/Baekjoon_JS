const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
console.log(input.toLowerCase()=== "n" ? "Naver D2" : "Naver Whale");
