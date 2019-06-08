let arr = [undefined,null,'',0]

for(let i in arr){
	let value = arr[i]
	console.log(value)
	console.log("===undefined", value===undefined);
	console.log("===null", value===null);
	console.log("===''", value==='');
	console.log("===0", value===0);
	console.log('*************************')
}

for(let i in arr){
	let value = arr[i]
	console.log(value)
	console.log("==undefined", value==undefined);
	console.log("==null", value==null);
	console.log("==''", value=='');
	console.log("==0", value==0);
	console.log('*************************')
}

