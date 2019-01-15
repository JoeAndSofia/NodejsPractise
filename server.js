/**
 * Created by imaginato on 18-6-5.
 */
var http = require('http');
var url = require('url')


http.createServer(function (request, response) {
	let query = url.parse(request.url, true).query
	let result = `${query.threadIndex},${query.value}`
	console.log(result)
	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end(result);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');