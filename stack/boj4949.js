// 문제 : 균형잡힌 세상
// 소괄호와 대괄호의 짝이 잘 맞는지 판단하는 문제

const solution = (paragraph) => {
	const log = [];
	const vps = (sentence) => {
		const stack = [];

		for (let i = 0; i < sentence.length; i++) {
			if (sentence[i] !== '(' && sentence[i] !== ')' && sentence[i] !== '[' && sentence[i] !== ']') continue;
			if (sentence[i] === '(' || sentence[i] === '[') stack.push(sentence[i]);
			if (sentence[i] === ')') {
				if (stack.at(-1) === undefined) return 'no';
				if (stack.at(-1) === '[') return 'no';
				stack.pop();
			}

			if (sentence[i] === ']') {
				if (stack.at(-1) === undefined) return 'no';
				if (stack.at(-1) === '(') return 'no';
				stack.pop();
			}
		}

		return stack.length === 0 ? 'yes' : 'no';
	};

	for (let p of paragraph) {
		if (p === '.') break;
		log.push(vps(p));
	}

	console.log(log.join('\n'));
};

solution([
	'So when I die (the [first] I will see in (heaven) is a score list).',
	'[ first in ] ( first out ).',
	'Half Moon tonight (At least it is better than no Moon at all].',
	'A rope may form )( a trail in a maze.',
	'Help( I[m being held prisoner in a fortune cookie factory)].',
	'([ (([( [ ] ) ( ) (( ))] )) ]).',
	' .',
	'.',
]);
