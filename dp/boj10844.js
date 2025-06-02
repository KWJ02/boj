// 문제 : 쉬운 계단 수
// 자연수 N이 주어질때, N 길이의 자연수가 있을때, 자연수의 인접한 자릿수의 차이가 1인 자연수들을 단계 수라 할때,
// 단계 수들의 개수를 1,000,000,000으로 나눈 나머지를 출력
// N = 2 ->  12 21 23 32 34 43 같은 수들이 계단 수
// 10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98
const solution = (n) => {
	const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));

	for (let i = 1; i < 10; i++) dp[1][i] = 1;

	for (let i = 2; i <= n; i++) {
		for (let j = 0; j < 10; j++) {
			if (j > 0) dp[i][j] += dp[i - 1][j - 1];
			if (j < 9) dp[i][j] += dp[i - 1][j + 1];
		}
	}

	console.log(dp[n].reduce((a, c) => a + c, 0));
};

solution(2);
