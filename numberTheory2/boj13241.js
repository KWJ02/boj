// 문제 : 최소공배수
// 유클리드 호제법으로 푸는 거인듯?

const solution = (arr) => {
	const [num1, num2] = arr;

	let a = num1;
	let b = num2;

	while (b !== 0) {
		[a, b] = [b, a % b];
	}

	console.log((num1 * num2) / a);
};

solution([1, 1]);
solution([3, 5]);
solution([1, 123]);
solution([121, 199]);
