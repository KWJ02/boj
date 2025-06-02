// 문제 : 알고리즘 수업 - 피보나치 수 1
// 재귀와 dp 퍼포먼스 차이 출력

const fibonacci = (n) => {
	let r = 1;
	let d = 0;

	const recursion = (n) => {
		if (n <= 2) return 1;
		r++;
		return recursion(n - 1) + recursion(n - 2);
	};

	const dp = (n) => {
		const dp = [0, 1, 1];
		for (let i = 3; i <= n; i++) {
			d++;
			dp[i] = dp[i - 1] + dp[i - 2];
		}
		return dp[n];
	};

	recursion(n);
	dp(n);

	console.log(r);
	console.log(d);
};

fibonacci(5);
