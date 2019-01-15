/**
 * Created by imaginato on 19-1-7.
 */
let start = process.uptime()*1000;
console.log("start", start);
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});


let end = process.uptime()*1000;
console.log("end", end);
let timeSpent = end - start;

console.log("程序执行结束!", timeSpent);