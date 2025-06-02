// 문제 : RGB 거리
// 거리의 길이 N이 주어질때, 집의 개수도 N개인데, i번째의 집의 색은 i-1과 i+1번쨰의 집의 색과 겹치지 않게 칠하면서
// 주어진 요금으로 가장 저렴하게 집을 칠할 수 있도록 하는 최소의 요금 출력

const solution = (fees) => {
	const dp = Array.from({ length: fees.length }, () => Array(3).fill(0));
	dp[0][0] = fees[0][0];
	dp[0][1] = fees[0][1];
	dp[0][2] = fees[0][2];

	for (let i = 1; i < fees.length; i++) {
		dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + fees[i][0];
		dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + fees[i][1];
		dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + fees[i][2];
	}

	console.log(Math.min(...dp[dp.length - 1]));
};

solution([
	[26, 40, 83],
	[49, 60, 57],
	[13, 89, 99],
]);
