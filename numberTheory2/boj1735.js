// 문제 : 분수 합
// 통분 후 더한 분수를 기약분수 형태로 출력

const solution = (frac1, frac2) => {
	const [num1, den1] = frac1;
	const [num2, den2] = frac2;

	const [num, den] = [num1 * den2 + num2 * den1, den1 * den2];
	let a = num;
	let b = den;

	while (b !== 0) {
		[a, b] = [b, a % b];
	}

	console.log(num / a, den / a);
};

solution([2, 7], [3, 5]);
