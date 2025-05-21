// 문제 : 이항 계수
// 자연수 n과 k (n >= k)가 주어질때, nCk를 구하는 것

const solution = (N, K) => {
	const getCombination = (n, k) => {
		let numerator = 1;
		for (let i = 1; i <= k; i++) {
			numerator *= n--;
		}

		let denominator = 1;
		for (let i = k; i > 0; i--) {
			denominator *= i;
		}

		return numerator / denominator;
	};

	console.log(getCombination(N, K));
};

solution(5, 3);
