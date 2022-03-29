const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item=>{return item.trim()})
input.pop()
const table = new Map();
input.forEach(item => {
    const data = table.get(item) || {total : 0};
    table.set(item, {
        total : data.total + 1
    })
})
const S = input.length
const array = [...table.entries()].sort().map(item => {return item[0].concat(' ').concat((item[1].total/S*100).toFixed(4))}).forEach(item=>console.log(item));
