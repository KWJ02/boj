// 문제 : 잃어버린 괄호

const solution = (str) => {
	const sep = str.split('-');
	const p = sep.map((v) => v.split('+')).map((v) => v.map(Number).reduce((a, c) => a + c, 0));
	let result = p[0];

	for (let i = 1; i < p.length; i++) {
		result -= p[i];
	}

	console.log(result);
};

solution('10+20+30+40');
