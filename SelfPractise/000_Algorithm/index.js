
/**
 * Greatest Common Divisor
 * @param a
 * @param b
 */
function calcGcd(a, b) {
	if(Number.isInteger(a) && Number.isInteger(b)){
		return (function func(a, b){
			console.log(`${a} and ${b}`);
			if(a === 1 || b === 1){
				return 1;
			}else if(a === b){
				return b;
			}else if(a < b){
				return func(b, a);
			}else {
				if(!(a&1) && !(b&1)){
					return func(a>>1, b>>1) << 1;
				}else if(!(a&1) && b&1){
					return func(a>>1, b);
				}else if(a&1 && !(b&1)){
					return func(a, b>>1);
				}else{
					return func(b, a - b);
				}
			}
		})(a, b);
	}else{
		let message = 'Invalid type parameter';
		let cause = '';
		if(!Number.isInteger(a)){
			cause = ` a = ${a}`;
			if(!Number.isInteger(b)){
				cause = `s a = ${a} and b = ${b}`;
			}
		}else{
			cause = ` b = ${b}`
		}
		throw TypeError(`${message}${cause}`);
	}
}

/**
 * Lowest Common Multiple
 * @param a
 * @param b
 */
function calcLcm(a, b) {

}

// exports.calcGcd = calcGcd;