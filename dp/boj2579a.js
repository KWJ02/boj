const solution = (n, arr) => {
	const dp = Array.from({ length: arr.length }).fill(0);
	if (n > 1) dp[0] = arr[0];
	if (n > 2) dp[1] = arr[0] + arr[1];
	if (n > 3) dp[2] = Math.max(dp[0] + arr[2], dp[1] + arr[2]); // dp[2] 구하는 방식이 틀림

	for (let i = 3; i < arr.length; i++) {
		dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
	}

	console.log(dp);
};

solution(6, [10, 20, 15, 25, 10, 20]);
