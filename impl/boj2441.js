// 문제 : 별 찍기 4

const solution = (n) => {
	const result = [];

	for (let i = 0; i < n; i++) {
		let str = ' '.repeat(i) + '*'.repeat(n - i);
		result.push(str);
	}

	console.log(result.join('\n'));
};

solution(5);
