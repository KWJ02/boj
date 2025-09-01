// 문제 : 별 찍기 5

const solution = (n) => {
	for (let i = n; i > 0; i--) {
		console.log(' '.repeat(i - 1) + '*'.repeat(2 * (n - i) + 1));
	}
};

solution(5);
