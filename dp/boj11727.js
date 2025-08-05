// 문제 : 2 x N 타일링 2
// 정수 N이 주어질 때, 2 x 1, 1 x 2, 2 x 2 타일로 도포할 수 있는 경우의 수 출력
// https://velog.io/@song961003/%EB%B0%B1%EC%A4%80-11727-2-x-n-%ED%83%80%EC%9D%BC%EB%A7%81-2-JS << 그림

const solution = (n) => {
	const dp = Array.from({ length: n }).fill(0);
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 3;

	if (n < 3) {
		console.log(dp[n]);
		return 0;
	}

	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 2] * 2 + dp[i - 1];
	}

	console.log(dp[n]);
};

solution(12);
