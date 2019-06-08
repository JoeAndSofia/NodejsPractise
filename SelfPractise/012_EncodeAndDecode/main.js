const {testDeciToHex, testHexToDeci} = require('../011_NumberSystem/main');

const testBase64 = (value) => {
	return new Buffer(value).toString('base64');
};

const testDebase64 = (value) => {
	return new Buffer(value, 'base64').toString();
};


const testTokenEncode = (value) => {
	let valArr = value.split(':');
	let tempArr = [];
	for(let val of valArr){
		tempArr.push(testDeciToHex(parseInt(val)));
	}
	let temp = tempArr.join(':');
	return testBase64(temp);
};

const testTokenDecode = (value) => {
	let temp = testDebase64(value);
	let tempArr = temp.split(':');
	let valArr = [];
	for(let t of tempArr){
		valArr.push(testHexToDeci(t));
	}
	return valArr.join(':');
};



exports.testBase64 = testBase64;
exports.testDebase64 = testDebase64;


let test = false;
if(test){
	let a = testBase64('101:21896196');
	console.log(a);
	a = a.replace(/=/g, '');
	console.log(a);
	let b = testDebase64(a);
	console.log(b);

	let c = testTokenEncode('101:21896196');
	console.log(c);
	let d = testTokenDecode(c);
	console.log(d);


}
