// 문제 : 연속 합
// 임의의 수열이 있을 때, 순서를 건드리지 않고 연속된 수의 합을 저장

const solution = (arr) => {
	const dp = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
	}
	console.log(dp);
	console.log(Math.max(...dp));
};

solution([10, -4, 3, 1, 5, 6, -35, 12, 21, -1]);
