// 문제 : 프린터 큐

const solution = (p, docs) => {
	const list = docs.map((v, i) => [v, i]);
	let max = Math.max(...docs);
	let count = 0;

	while (list.length > 0) {
		if (list[0][0] === max) {
			count++;
			if (list[0][1] === p[1]) {
				console.log(count);
				break;
			}
			list.shift();
			max = Math.max(...list.map((v) => v[0]));
		} else {
			list.push(list.shift());
		}
	}
};

solution([6, 0], [1, 1, 9, 1, 1, 1]);
