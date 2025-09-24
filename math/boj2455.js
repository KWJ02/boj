// 문제 : 지능형 기차

const solution = (f) => {
	let curr = 0;
	let max = -Infinity;

	for (let p of f) {
		curr += p[1] - p[0];
		max = Math.max(curr, max);
	}

	console.log(max);
};

solution([
	[0, 32],
	[3, 13],
	[28, 25],
	[39, 0],
]);
