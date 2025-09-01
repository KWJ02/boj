// 문제 : 별 찍기 9

const solution = (n) => {
	for (let i = 0; i < n; i++) {
		console.log(' '.repeat(i) + '*'.repeat(2 * (n - i) - 1));
	}

	for (let i = 2; i <= n; i++) {
		console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
	}
};

solution(5);
