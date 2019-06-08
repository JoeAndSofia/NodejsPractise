/**
 * Created by imaginato on 19-2-19.
 */
const fn1 = (a,b) => {
	return new Promise((resolve, rejecg) => {
		resolve(a + b);
	})
}

const fn2 = (arr,brr, c) => {
	return new Promise((resolve, rejecg) => {
		let promises = []
		for(let i in arr){
			promises.push(fn1(arr[i], brr[i]));
		}

		return Promise.all(promises)
			.then(r => ({
				r:r
			}))
	})
}