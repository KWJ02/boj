// 문제 : 스택
// 명령어에 맞는 명령을 처리하는 프로그램 작성

const solution = (orders) => {
	const arr = [];
	const actions = [];

	for (let order of orders) {
		if (order.includes('push')) {
			arr.push(Number(order.split(' ')[1]));
		} else {
			switch (order) {
				case 'pop':
					actions.push(arr.length > 0 ? arr.pop() : -1);
					break;
				case 'size':
					actions.push(arr.length);
					break;
				case 'empty':
					actions.push(arr.length === 0 ? 1 : 0);
					break;
				case 'top':
					actions.push(arr.length > 0 ? arr[arr.length - 1] : -1);
					break;
			}
		}
	}

	console.log(actions.join('\n'));
};

solution([
	'push 1',
	'push 2',
	'top',
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
	'top',
]);
