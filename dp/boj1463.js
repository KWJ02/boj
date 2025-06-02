// 문제 : 1로 만들기
// 정수 N이 주어졌을때, 3으로 나누어 떨어지면 3으로 나누거나, 2로 나누어 떨어지면 2로 나누거나, 1을 빼는 방식으로
// N을 1로 만들기 위한 최소의 연산 횟수

// 반대로 1부터 n까지 1을 더하거나, 2,3을 곱해서 n을 만들때까지로 생각?
// dp[i]는 i를 1로 만들기 위한 최소 연산횟수. << 이생각을 못햇네
const solution = (n) => {
	const dp = [0, 0, 1, 1];

	for (let i = 4; i <= n; i++) {
		if (i % 3 === 0 && i % 2 === 0) {
			dp[i] = Math.min(dp[i / 3] + 1, dp[i / 2] + 1);
		} else if (i % 3 === 0) {
			dp[i] = Math.min(dp[i / 3] + 1, dp[i - 1] + 1);
		} else if (i % 2 === 0) {
			dp[i] = Math.min(dp[i / 2] + 1, dp[i - 1] + 1);
		} else {
			dp[i] = dp[i - 1] + 1;
		}
	}

	console.log(dp[n]);
};

solution(10);
