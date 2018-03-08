const url = 'https://jsonplaceholder.typicode.com/posts12312/';

// fetch(url)
// 	.then(response => response.json())
// 	.then(data => console.log(data));

// the catch statement is only triggered if the network request flat out fails
// it WON'T catch if you get a 404 or anything at 300 or above which is a failure
// Stephen recommends using Axios

fetch(url)
	.then(response => console.log(response))
	.catch(error => console.log('BAD', error));

