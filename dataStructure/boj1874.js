// 문제 : 스택 수열

const solution = (n, seq) => {
	const result = [];
	const stack = [];
	let cur = 1;

	for (let i = 0; i < n; i++) {
		const target = seq[i];

		while (cur <= target) {
			stack.push(cur++);
			result.push('+');
		}

		if (stack[stack.length - 1] === target) {
			stack.pop();
			result.push('-');
		} else {
			console.log('NO');
			return 0;
		}
	}

	console.log(result.join('\n'));
};

solution(8, [4, 3, 6, 8, 7, 5, 2, 1]);
