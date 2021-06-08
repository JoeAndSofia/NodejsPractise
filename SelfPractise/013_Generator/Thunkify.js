const path1 = '/home/imaginato/桌面/testThunk001.txt';
const path2 = '/home/imaginato/桌面/testThunk002.txt';
const encode = 'utf-8';

const fs = require('fs');

function run(fn) {
	let gen = fn();
	function next(err, data) {
		let result = gen.next(data);
		if(result.done) return;
		result.value(next);
	}
	next();
}

let Thunk = function(fn) {
	return function() {
		let args = Array.prototype.slice.call(arguments);
		// console.log('args: ', args);
		return function(callback){
			args.push(callback);
			return fn.apply(this, args);
		}
	}
};


let readFileThunk = Thunk(fs.readFile);

let callbackFn = (err, data) => {
	if(err){
		console.error('callback-err: ', err);
	}else{
		console.log('callback-data: ', data);
		return data;
	}
};

function* gen() {
	let f1 = yield readFileThunk(path1, encode)(callbackFn);
	console.log('f1: ', f1);

	yield readFileThunk(f1.path, f1.encode)(callbackFn);


};


let g = gen();
let r1 = g.next();
console.log('r1: ', r1);
r1.path = path2;
r1.encode = 'utf-8';
let r2 = g.next(r1);
console.log('r2: ', r2);
let r3 = g.next();
console.log('r3: ', r3);

// fs.readFile(path1, 'utf-8', (err, data) => {
//   if(err){
//     console.error(err);
//   }else{
//     console.log(data);
//   }
// })