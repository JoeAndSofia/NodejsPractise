const func1  = () => {
	let map1 = new Map();

	map1.set(4,14);
	map1.set(1,11);
	map1.set(3,13);
	map1.set(2,12);



// console.log(map)

	//warning: it's using `of` rather than `in`

	for(let i of map1){
		console.log(i, i[0], i[1])
	}
	// console.log(map1)
	// console.log(map1.get('1'))
	// console.log(map1.get(1))
	//
	// console.log(map1.size)
}

const func2 = () => {

	let map1 = new Map();

	map1.set(1,11);
	map1.set(2,12);
	map1.set(3,13);
	map1.set(4,14);

	let keys = map1.keys()
	let values = map1.values()

	for(let i of keys){
		console.log(i)
	}
	for(let i of values){
		console.log(i)
	}
}

func1();


