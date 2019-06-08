const crypto = require('crypto');

const {ENCRYPTION} = require('../../000_constant/index');

const listCipher = () => {
	console.log(crypto.getCiphers());
};

const tryCipher = (value, cipherName, secret) => {

	let cipher = crypto.createCipher(cipherName, secret);
	let enc = cipher.update(value, 'utf8', 'hex');//编码方式从utf-8转为hex;
	enc += cipher.final('hex');//编码方式从转为hex;
	return enc;
};

const tryDecipher = (value, cipherName, secret) => {
	let decipher = crypto.createDecipher(cipherName, secret);
	let dec = decipher.update(value, 'hex', 'utf8');//编码方式从hex转为utf-8;
	dec += decipher.final('utf8');//编码方式从utf-8;
	return dec;
};


let test = true;
if(test){
	listCipher();
	let re1 = tryCipher('99999999999999999999', ENCRYPTION.AUTHORIZED_ACCESS.CIPHER, ENCRYPTION.AUTHORIZED_ACCESS.SECRET);
	console.log(re1);
	let re2 =  tryDecipher('1ddaede9eb67f443cdfc45527ebb4525cf03a723088b1679c02d34dfb44a712a', ENCRYPTION.AUTHORIZED_ACCESS.CIPHER, ENCRYPTION.AUTHORIZED_ACCESS.SECRET);
	console.log(re2);
}