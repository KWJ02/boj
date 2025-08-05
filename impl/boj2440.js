// 문제 : 별 찍기 3

const solution = (n) => {
	const step = [];
	for (let i = n; i > 0; i--) {
		step.push('*'.repeat(i));
	}
	console.log(step.join('\n'));
};

solution(6);
