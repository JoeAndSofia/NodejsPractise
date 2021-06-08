const fetch = require('node-fetch');

fetch('http://www.baidu.com')
  .then(res => res.text())
  .then(body => console.log(body));