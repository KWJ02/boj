// 문제 : 제곱수의 합
// 얘는 다시풀어보는것도

const solution = (n) => {
	const dp = Array.from({ length: n + 1 }).fill(Infinity);
	dp[0] = 0;

	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j * j <= i; j++) {
			dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
		}
	}

	console.log(dp[n]);
};

solution(18);
