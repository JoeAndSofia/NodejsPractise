const moment = require('moment-timezone');
const m = moment().tz('Asia/Shanghai');

const startOfDay = m.startOf('day').format("YYYY-MM-DDTHH:mm:ss")+"Z";
const endOfDay = m.endOf('day').format("YYYY-MM-DDTHH:mm:ss")+"Z";

console.log('day: ', startOfDay, endOfDay);



const startOfWeek = m.startOf('week').format("YYYY-MM-DDTHH:mm:ss")+"Z";
const endOfWeek = m.endOf('week').format("YYYY-MM-DDTHH:mm:ss")+"Z";

console.log('week: ', startOfWeek, endOfWeek);



const startOfISOWeek = m.startOf('isoWeek').format("YYYY-MM-DDTHH:mm:ss")+"Z";
const endOfISOWeek = m.endOf('isoWeek').format("YYYY-MM-DDTHH:mm:ss")+"Z";

console.log('isoWeek: ', startOfISOWeek, endOfISOWeek, m.get('isoWeek'));



const startOfMonth = m.startOf('month').format("YYYY-MM-DDTHH:mm:ss")+"Z";
const endOfMonth = m.endOf('month').format("YYYY-MM-DDTHH:mm:ss")+"Z";

console.log('month: ', startOfMonth, endOfMonth);



const m1 = moment().tz('Asia/Shanghai');
console.log(new Date(parseInt(m1.format('x'))));
console.log(m1.weekday());
console.log(m1.isoWeekday());
m1.add(1, 'day');
console.log(m1.weekday());
console.log(m1.isoWeekday());
m1.add(1, 'day');
console.log(m1.weekday());
console.log(m1.isoWeekday());
m1.add(1, 'day');
console.log(m1.weekday());
console.log(m1.isoWeekday());
m1.add(1, 'day');
console.log(m1.weekday());
console.log(m1.isoWeekday());