const testPost = () => {
	return fetch('www.baidu.com').then(response => {
			console.log(response)
		});
};

testPost();