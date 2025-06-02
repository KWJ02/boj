// 문제 : 가장 긴 부분 수열
// 수열이 주어질때, 그 수열에서 증가하는 부분수열의 길이를 출력

const solution = (n, arr) => {
	const dp = Array.from({ length: n }).fill(1);

	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	console.log(Math.max(...dp));
};

solution(5, [5, 1, 2, 3, 4]);
