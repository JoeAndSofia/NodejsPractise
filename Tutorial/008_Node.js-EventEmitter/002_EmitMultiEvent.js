/**
 * Created by imaginato on 19-1-7.
 */
//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
console.log(events.EventEmitter.listenerCount(emitter, "someEvent"));
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
console.log(events.EventEmitter.listenerCount(emitter, "someEvent"));
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
console.log(events.EventEmitter.listenerCount(emitter, "someEvent"));


console.log(emitter.listenerCount("someEvent"));
