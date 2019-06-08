const crypto = require('crypto');

const listHash = () => {
	console.log(crypto.getHashes());
};

const tryHash = (value, hashName) => {
	let hash = crypto.createHash(hashName);
	return hash.update(value).digest('hex');
};

const findDuplicatedHashForNaturalNumber = () => {
	let found = false;
	let i = 0;
	let hashSet = new Set();
	while(!found){
		let upper = i + 10000;
		if(upper%1000000 === 0){
			console.log('upper:', upper)
		}
		for(;i < upper; i++){
			let hash = crypto.createHash('md5');
			let v = hash.update(i.toString()).digest('hex');
			hashSet.add(v);
		}

		if(hashSet.size != i){
			console.log(hashSet.size, i);
			found = true
		}else{

		}
	}
};

let test = true;
if(test){
	console.log(tryHash('kkndkknd', 'md5'));
}