// 문제 : 포도주 시식
// boj2579 계단 오르기 문제와 비슷
// 3잔을 연속으로 마실수 없으며, 최대로 마실 수 있는 포도주의 양 출력
// 잔을 패스하는 것이 핵심이었음
// 계단 오르기 식으로하면 dp[5] > dp[6]이 나와버려서, 최댓값을 가릴때 dp[i-1]값도 체크해야함
// 이해는 안됨 ㅅㅂ

// dp[i] = i번째까지 마셨을때의 최대치
const solution = (n, arr) => {
	const dp = Array(n).fill(0);
	if (n > 1) dp[0] = arr[0];
	if (n > 2) dp[1] = arr[0] + arr[1];
	if (n > 3) dp[2] = Math.max(dp[1], arr[0] + arr[2], arr[1] + arr[2]);

	for (let i = 3; i < n; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
	}

	console.log(dp[n - 1]);
};

solution(6, [6, 10, 13, 9, 8, 1]);
