// 문제 : A + B - 6

const solution = (str) => {
	console.log(
		str
			.split(',')
			.map(Number)
			.reduce((a, c) => a + c, 0)
	);
};
