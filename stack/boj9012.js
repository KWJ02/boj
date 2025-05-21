// 문제 : 괄호
// 괄호의 모양이 올바르게 잡혀있는 VPS인지, 아닌지 YES or NO로 출력

const solution = (ps) => {
	const log = [];

	const vps = (str) => {
		const stack = [];

		for (let i = 0; i < str.length; i++) {
			if (str[i] === '(') stack.push(str[i]);
			if (str[i] === ')') {
				if (stack.length === 0) {
					return 'NO';
				} else {
					stack.pop();
				}
			}
		}

		return stack.length === 0 ? 'YES' : 'NO';
	};

	for (let p of ps) {
		log.push(vps(p));
	}

	console.log(log.join('\n'));
};

solution(['(())())', '(((()())()', '(()())((()))', '((()()(()))(((())))()', '()()()()(()()())()', '(()((())()(']);
