// 문제 : 피보나치 수 2
// 피보나치를 dp로 해결

const solution = (n) => {
	const dp = [0, 1, 1];

	if (n < 3) {
		console.log(dp[n]);
		return 0;
	}

	for (let i = 3; i <= n; i++) {
		dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
	}

	console.log(String(dp[n]));
};

solution(10);
