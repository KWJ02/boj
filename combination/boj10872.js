// 문제 : 팩토리얼

const solution = (N) => {
	const factorial = (n) => {
		if (n === 0 || n === 1) return 1;
		return n * factorial(n - 1);
	};

	console.log(factorial(N));
};

solution(0);
solution(1);
solution(2);
solution(3);
solution(4);
solution(5);
solution(6);
solution(7);
solution(8);
solution(9);
solution(10);
