// 문제 : OX퀴즈

const solution = (results) => {
	let seq = 1;
	let sum = 0;

	for (let result of results) {
		if (result === 'O') {
			sum += 1 * seq++;
		} else {
			seq = 1;
		}
	}

	console.log(sum);
};

solution(['O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'X']);
