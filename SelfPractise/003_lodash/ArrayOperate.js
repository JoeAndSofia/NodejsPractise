const _ = require('lodash')

let arr1 = [
	1,2,3,3,4,5,6,6,7,7,8,8,9
]

let arr2 = [
	1,2,3,3,4,5,6,6,7,7,8,8,9,10,12,17
]

let arr3 = []


let diff1 = _.difference(arr2, arr1);
console.log(diff1);

let diff2 = _.difference(arr1, arr2);
console.log(diff2);

let diff3 = _.difference(arr1, arr3);
console.log(diff3);