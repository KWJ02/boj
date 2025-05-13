// 문제 : 약수 구하기
// 자연수 p의 q번째 약수를 출력하는 문제

const solution = (str) => {
	const [number, pos] = str.split(' ').map(Number);
	const iter = Math.sqrt(number);
	const set = new Set();

	if (pos === 1) {
		return 1;
	}

	for (let i = 1; i <= iter; i++) {
		if (number % i === 0) {
			set.add(i);
			set.add(number / i);
		}
	}

	const stack = [...set];

	stack.sort((a, b) => a - b);
	return stack[pos - 1] === undefined ? 0 : stack[pos - 1];
};

console.log(solution('6 3'));
