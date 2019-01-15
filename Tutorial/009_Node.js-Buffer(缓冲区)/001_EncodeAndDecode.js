/**
 * Created by imaginato on 19-1-7.
 */
const buf1 = Buffer.from('测试字符runoob', 'ascii');
logDecoding(buf1);

const buf2 = Buffer.from('测试字符runoob', 'utf8');
logDecoding(buf2);

const buf3 = Buffer.from('测试字符runoob', 'utf16le');
logDecoding(buf3);



function logDecoding(buf){
    console.log("original", buf)

    console.log('ascii', buf.toString('ascii'));

    console.log('hex', buf.toString('hex'));

    console.log('base64', buf.toString('base64'));

    console.log('binary', buf.toString('binary'));

    console.log('utf8', buf.toString('utf8'));

    console.log('utf16le', buf.toString('utf16le'));
}


let b01 = Buffer.alloc(8, 0);
console.log(b01);




