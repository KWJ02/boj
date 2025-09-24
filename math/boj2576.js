// 문제 : 홀수

const solution = (nums) => {
	let sum = 0;
	let min = Infinity;

	for (let n of nums) {
		if (n % 2 === 1) {
			sum += n;
			min = Math.min(min, n);
		}
	}

	if (sum === 0) {
		console.log(-1);
	} else {
		console.log(sum);
		console.log(min);
	}
};

solution([12, 77, 38, 41, 53, 92, 85]);
