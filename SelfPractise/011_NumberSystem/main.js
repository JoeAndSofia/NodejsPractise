const testDeciToHex = (value) => {
	return  value.toString(16);
};

const testHexToDeci = (value) => {
	return parseInt(value, 16);
};



exports.testDeciToHex = testDeciToHex;
exports.testHexToDeci = testHexToDeci;

let test = false;
if(test){
	let a = testDeciToHex(255);
	console.log(a);
	let b = testHexToDeci(a);
	console.log(b);
}