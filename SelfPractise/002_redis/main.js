/**
 * Created by imaginato on 19-1-18.
 */
const redis = require('redis')

const client = redis.createClient(6379, 'localhost');


function keys(pattern){
    client.keys(pattern, function(err, res){
        if(err){
            console.log('Error', err);
            return;
        }
        console.dir(res)
    });
}

function del(key) {
	client.del(key, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res);
	})
}

function hmset(key, hashObj){
    client.hmset(key, hashObj, function(err, res){
        if(err){
            console.log('Error', err);
            return;
        }
        console.dir(res)
    });
}

function hmget(key, fields){
    client.hmget(key, fields, function(err, res){
        if(err){
            console.log('Error', err);
            return;
        }
        if(!res){
        	console.log(null);
		}
		console.log(res);
    });
}

function hgetAll(key) {
    client.hgetall(key, function(err, res){
        if(err){
            console.log('Error', err);
            return;
        }
        console.dir(res);
    });
}

function hlen(key) {
	client.hlen(key, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res);
	});
}

function hgetall(key) {
	client.hgetall(key, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}

		for(let k in res){
			console.log('key-value', k, typeof k, res[k], typeof res[k]);
		}

		console.log(res);
	});
}

function hdel(key, fields){
	client.hdel(key, fields, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		if(!res){
			console.log(null);
		}
		console.log(res);
	})
}

function time(){
	client.time(function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.dir(res);
		console.log(Array.isArray(res))
		console.log(Array.isArray(res[0]))
	});
}

function zadd(args){
	client.zadd(args, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res);
	})
}

function zrevrangebyscore(args){
	client.zrevrangebyscore(args, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res)
	})
}

function zrangebyscore(args){
	client.zrangebyscore(args, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res)
	})
}

function zremrangebyscore(args){
	client.zremrangebyscore(args, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res)
	})
}

function rpush(args){
	client.rpush(args, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res);
	});
}

function lrange(args){
	client.lrange(args, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res);
	});
}

function ltrim(args){
	client.ltrim(args, function(err, res){
		if(err){
			console.log('Error', err);
			return;
		}
		console.log(res);
	});
}

// hmset('joe-test', {a:'ac', b:'bd'});
// hmset('joe-test', {
//     1:'1',
//     2:'2',
//     3:'3',
//     4:'4',
//     5:'5',
//     6:'6',
//     7:'7',
//     8:'8',
//     9:'9'
// });
//
// hmset('joe-test', {
// 	11:11,
// 	12:12,
// 	13:13,
// 	14:14,
// 	15:15,
// 	16:16,
// 	17:17,
// 	18:18,
// 	19:19
// });
//
// hmset('joe-test',{
// 	111:true,
// 	121:null,
// 	131:false,
// 	141:{'ab':'x'}
// })


// let keyArr = [];
// keyArr.push('a')
// keyArr.push('b');
// keyArr.push('1');
// console.log(keyArr);
// for(let x in keyArr){
// 	console.log(x,keyArr[x])
// }
// hmget('joe-test',['a','b','1','2','3','1161']);
// hmget('joe-test',keyArr);
// hmget('joe-test',['joe-test','joe-test','joe-test'])
// hgetAll('joe-test');

// time();


let testHash = true;
if(testHash){
	hlen('hash');

	hmset('hash', {
		1:'1',
		2:'2',
		3:'3',
		4:'4',
		5:'5',
		6:'6',
		7:'7',
		8:'8',
		9:'9'
	});

	hlen('hash');

	hmget('hash', [1,2,3,4,5,6,7,8,9]);

	hlen('hash');
	hgetall('hash');

	hdel('hash', [1,2,3,4,5,6,7,8,9]);	//9

	hlen('hash');	//0
	hgetall('hash');	//null

	// del('hash');
}

let testZset = false
if(testZset){
	del('testkey');

	let arg1 = ['testkey',1840, '1550131918264-7-778', 1840, '1550117100771-1-1849', 1840, '1550117121847,10-62489'];
	zadd(arg1);

	let args2 = [ 'testkey', 1840, 1840, 'WITHSCORES', 'LIMIT', 0, 2 ];
	zrevrangebyscore(args2);

	args2 = [ 'testkey', 1840, 1840, 'LIMIT', 0, 3 ];
	zrevrangebyscore(args2);

	zrangebyscore(args2);


	let args3 = ['testkey', 1840.0, 1840.0]
	zremrangebyscore(args3);

	zrangebyscore(args2);
}

let testList = false;
if(testList){
	ltrim(['list',10000, 10001]);

	let arg1 = ['list',1,2,3,4,5,6,7];
	rpush(arg1);
	rpush(arg1);
	rpush(arg1);

	let arg2 = ['list', 0, 9];
	lrange(arg2);

	let arg3 = ['list', 10, 10000];
	ltrim(arg3);

	let arg4 = ['list', 0, 10];
	lrange(arg4);
}
