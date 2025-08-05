// 문제 : 부녀회장이 될테야
// a층 b호에 입주하려면, a-1층에서 1호부터 b호까지의 사람들을 데려와야 함.
// 0층부터 시작하며 하나의 층에 1호부터 14호까지 존재함.

const solution = (k, n) => {
	const dp = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];

	if (dp[k] !== undefined) {
		console.log(dp[k][i]);
		return 0;
	}

	for (let i = 1; i <= k; i++) {
		dp[i] = [1];
		for (let j = 1; j < 14; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}

	console.log(dp[k][n - 1]);
};

solution(2, 3);
