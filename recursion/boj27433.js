// 문제 : 팩토리얼 2
// for문이 아닌 재귀함수로 구현

const solution = (n) => {
	const factorial = (n) => {
		if (n <= 1) return 1;
		return n * factorial(n - 1);
	};

	console.log(factorial(n));
};

solution(10);
