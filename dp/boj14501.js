// 문제 : 퇴사
// n이 주어질때, 1일부터 n일까지의 상담 중 최대 수익

const solution = (period, profit) => {
	const l = period.length;
	const dp = Array.from({ length: l }).fill(0);

	for (let i = 0; i < l; i++) {
		if (i + period[i] > l) continue;
		dp[i] = dp[i] + profit[i];

		for (let j = i + period[i]; j < l; j++) {
			dp[j] = Math.max(dp[j], dp[i]);
		}
	}

	console.log(Math.max(...dp));
};

solution([3, 5, 1, 1, 2, 4, 2], [10, 20, 10, 20, 15, 40, 200]);
