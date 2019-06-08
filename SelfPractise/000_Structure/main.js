const isEmpty = (o,i) => {
	var i;
	if(!o)
		return !0;

	try{
		for(i of o)
			return !1;
		return !0;
	}catch(e){
		try{
			for(i in o)
				return !1;
			return !0;
		}catch(e){
			return !1;
		}
	}
}


let aMap = new Map([
	['server',{time:Date.now()}],
	['intro',{}],
	['banner',[]],
	['overview',{}],
	['menu',{}],
	['review', {}],
	['photo',{}],
	['photo_t1',{}],
	['photo_t2',{}],
]);
let eMap = new Map();

let aSet = new Set([1,2,3]);
let eSet = new Set();
let aObj = {a:'a'}
let eObj = {}
let aArr = [1]
let eArr = []


let i=0
console.time(0);
console.log(i, isEmpty()); i++;
console.log(i, isEmpty(aMap,i.toString())); console.timeEnd(i); i++;
console.log(i, isEmpty(eMap,i.toString())); console.timeEnd(i); i++;
console.log(i, isEmpty(aSet,i.toString())); console.timeEnd(i); i++;
console.log(i, isEmpty(eSet,i.toString())); console.timeEnd(i); i++;
console.log(i, isEmpty(aObj,i.toString())); console.timeEnd(i); i++;
console.log(i, isEmpty(eObj,i.toString())); console.timeEnd(i); i++;
console.log(i, isEmpty(aArr,i.toString())); console.timeEnd(i); i++;
console.log(i, isEmpty(eArr,i.toString())); console.timeEnd(i); i++;
console.timeEnd(0);