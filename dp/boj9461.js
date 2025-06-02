// 문제 : 파도반 수열
// P(1~10) = 1,1,1,2,2,3,4,5,7,9
// P(n) = n-2 + n-3

const solution = (n) => {
	const dp = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
	for (let i = 10; i <= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 3];
	}

	console.log(dp[n - 1]);
};

solution(12);
