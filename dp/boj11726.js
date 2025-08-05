// 문제 : 2xN 타일링
// height = 2로 고정인 크기에서, 정수 n이 주어질때 2 x 1, 1 x 2 타일을 이용해 도포할 수 있는 경우의 수 출력

const solution = (tile) => {
	const dp = [0, 1, 2];

	if (tile < 3) {
		console.log(dp[tile]);
		return 0;
	}

	for (let i = 3; i <= tile; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}

	console.log(dp[tile] % 10007);
};

solution(9);
