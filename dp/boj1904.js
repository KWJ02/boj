// 문제 : 01타일
// 1과 00의 타일이 있을때, 크기가 N인 타일을 만들수 있는 모든 경우의 수
// N : 4 => 0000, 0011, 1001, 1100, 1111 -> 총 5가지

const solution = (n) => {
	const dp = [0, 1, 2];
	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
	}

	console.log(dp[n]);
};

solution(4);
