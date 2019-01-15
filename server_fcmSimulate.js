var http = require('http');
var url = require('url')
var bodyPaeser =require('body-parser')
var express = require('express')


var server = express()


server.use(bodyPaeser.urlencoded(
    {
        extended: false,
        limit: 2*1024*1024
    }
));
server.use(bodyPaeser.json());

server.post('/push/firebase', function(req, res){
    // var query = req.query
    // console.log('query', query);

    var body = req.body

    let message = body.message
    if(!message){
        message = {}
    }

    let device_tokens = body.device_tokens

    let tokenList = []
    if(device_tokens){
        for(let i in device_tokens){
            let token = device_tokens[i]
            var eachPushResult = null
            if(token.startsWith('e')){
                eachPushResult = {
                    error:'NotRegistered',
                }
            }else{
                eachPushResult = {
                    token:device_tokens[i].substr(0,8),
                }
            }
            tokenList.push(eachPushResult)
        }
    }


    let result = {
        tokenList: tokenList,
        message:message
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end();
})




server.listen(8888, function(){
    console.log('server started');
});