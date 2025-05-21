// 문제 : 큐 2
// 28278번 스택 2 와 비슷한 문제, 자료 구조만 스택에서 큐로 변환

const solution = (orders) => {
	const queue = [];
	const log = [];
	let idx = 0;
	for (let i = 0; i < orders.length; i++) {
		const [order, num] = orders[i].split(' ');
		if (num !== undefined) {
			queue.push(num);
			continue;
		}

		switch (order) {
			case 'pop':
				if (queue.length === idx) {
					log.push(-1);
				} else {
					log.push(queue[idx++]);
				}
				break;
			case 'size':
				log.push(queue.length - idx);
				break;
			case 'empty':
				log.push(queue.length === idx ? 1 : 0);
				break;
			case 'front':
				if (queue.length > idx) {
					log.push(queue[idx]);
				} else {
					log.push(-1);
				}
				break;
			case 'back':
				if (queue.length > idx) {
					log.push(queue.at(-1));
				} else {
					log.push(-1);
				}
				break;
		}
	}

	console.log(log.join('\n'));
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
