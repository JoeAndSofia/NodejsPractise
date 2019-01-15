/**
 * Created by imaginato on 19-1-7.
 */
let start = process.uptime()*1000;
console.log("start", start);
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());

let end = process.uptime()*1000;
console.log("end", end);
let timeSpent = end - start;

console.log("程序执行结束!", timeSpent);
process.exit(0);