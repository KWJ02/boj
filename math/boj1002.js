// 문제 : 터렛

const input = `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`
	.toString()
	.trim()
	.split('\n')
	.slice(1)
	.map((v) => v.split(' ').map(Number));

const solution = (coors) => {
	const [x1, y1, r1, x2, y2, r2] = coors;

	if (x1 === x2 && y1 === y2 && r1 === r2) {
		console.log(-1);
		return;
	}

	const diff = Math.sqrt(Math.abs(x2 - x1) ** 2 + Math.abs(y2 - y1) ** 2);
	const max = Math.max(r1, r2);
	const min = Math.min(r1, r2);

	if (r1 + r2 < diff) {
		// 교차하지 않을때
		console.log(0);
	} else if (r1 + r2 === diff) {
		// 외접할 때
		console.log(1);
	} else if (diff + min === max) {
		// 내접할 때
		console.log(1);
	} else if (diff + min < max) {
		// 포함할때
		console.log(0);
		return;
	} else {
		// 교차할 때
		console.log(2);
	}
};

for (let i of input) {
	solution(i);
}
