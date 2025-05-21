// 문제 : 피보나치 수 5
// 얘도 재귀로 구현

const solution = (n) => {
	const fibonacci = (n) => {
		if (n <= 0) return 0;
		if (n === 1 || n === 2) return 1;
		return fibonacci(n - 1) + fibonacci(n - 2);
	};

	console.log(fibonacci(n));
};

solution(10);
