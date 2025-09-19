// 문제 : 수들의 합
// 94%에서 실패
const solution = (s) => {
	const dp = [0, 1];

	if (s <= 2) {
		console.log(1);
		return;
	}

	for (let i = 2; i + dp[i - 1] <= s; i++) {
		dp[i] = dp[i - 1] + i;
	}

	if (dp[dp.length - 1] === s) {
		console.log(dp.length);
	} else {
		console.log(dp.length - 1);
	}
};

solution(200);
