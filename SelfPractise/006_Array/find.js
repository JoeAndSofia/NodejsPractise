/**
 * Created by imaginato on 19-8-16.
 */
var ages = [3, 10, 18, 20];

function checkAdult(age) {
	console.log('checkAdult: ', age);
	return age >= 18;
}

function myFunction() {
	return ages.find(checkAdult);
}

console.log(myFunction());
