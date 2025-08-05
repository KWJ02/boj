// 문제 : 큐

const solution = (orders) => {
	const result = [];
	const q = [];
	let idx = 0;

	for (let o of orders) {
		if (o.includes('push')) {
			q.push(o.split(' ')[1]);
		} else {
			switch (o) {
				case 'pop':
					result.push(q.length - idx > 0 ? q[idx++] : -1);
					break;
				case 'size':
					result.push(q.length - idx);
					break;
				case 'empty':
					result.push(q.length - idx > 0 ? 0 : 1);
					break;
				case 'front':
					result.push(q.length - idx > 0 ? q[idx] : -1);
					break;
				case 'back':
					result.push(q.length - idx > 0 ? q[q.length - 1] : -1);
					break;
			}
		}
	}

	console.log(result.join('\n'));
};

solution([
	'push 1',
	'push 2',
	'front',
	'back',
	'size',
	'empty',
	'pop',
	'pop',
	'pop',
	'size',
	'empty',
	'pop',
	'push 3',
	'empty',
	'front',
]);
