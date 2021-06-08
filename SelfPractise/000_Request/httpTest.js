const http = require('http');

const testHttp = uri => {
  if (!uri) {
    console.log('uri: ', uri);
  } else {
    http.get(uri, res => {
      const content = [];
      res.on('data', line => {
        content.push(line);
      });
      res.on('end', () => {
        console.log(content);
      });
    });
  }
};

testHttp('http://www.baidu.com');
