let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject();
	}, 3000);
});

promise
	.then(() => console.log('finally finished'))
	.then(() => console.log('this ran as well'))
	.catch(() => console.log('Rejected promise!!!'))

