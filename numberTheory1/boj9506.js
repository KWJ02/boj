// 문제 : 약수들의 합
// 완전수 (6,28,496,8128..) 등 일 경우 약수들의 합을 덧셈 문자열로 출력, 아니면 다른 심볼로 표현
// 완전수 : 자기 자신을 제외한 약수들의 합이 자기 자신과 같은 수

const solution = (num) => {
	const iter = Math.sqrt(num);
	const set = new Set();

	for (let i = 1; i <= iter; i++) {
		if (num % i === 0) {
			set.add(i);
			set.add(num / i);
		}
	}

	// 약수들 중 자기 자신 제거
	const stack = [...set].sort((a, b) => a - b).slice(0, set.size - 1);
	const sum = stack.reduce((a, c) => a + c, 0);

	// 완전수가 아니면
	if (num !== sum) {
		return `${num} is NOT perfect.`;
	}

	let result = `${num} = `;

	for (let i = 0; i < stack.length; i++) {
		result += stack[i];

		if (i !== stack.length - 1) {
			result += ' + ';
		}
	}

	return result;
};

console.log(solution(6));
