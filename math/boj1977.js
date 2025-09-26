// 문제 : 완전제곱수

const solution = (m, n) => {
	const square = [];
	for (let i = m; i <= n; i++) {
		if (Math.sqrt(i) % 1 === 0) square.push(i);
	}

	if (square.length === 0) {
		console.log(-1);
	} else {
		console.log(square.reduce((a, c) => a + c, 0));
		console.log(square[0]);
	}
};

solution(75, 80);
