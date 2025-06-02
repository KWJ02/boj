// 문제 : 정수 삼각형
// 위에서 양 옆의 숫자로만 내려오면서, 최대의 합을 구하는 문제

const solution = (tri) => {
	const dp = [tri[0]];

	for (let i = 1; i < tri.length; i++) {
		const floor = tri[i];
		const arr = [];
		for (let j = 0; j < floor.length; j++) {
			if (j === 0) {
				arr.push(floor[j] + dp[i - 1][0]);
			} else if (j === floor.length - 1) {
				arr.push(floor[j] + dp[i - 1][j - 1]);
			} else {
				arr.push(Math.max(floor[j] + dp[i - 1][j - 1], floor[j] + dp[i - 1][j]));
			}
		}
		dp.push(arr);
	}
	console.log(Math.max(...dp[dp.length - 1]));
};

// solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);

// dp 초기화 후 dp 인덱스 접근으로만 푸는 방법
const solution2 = (tri) => {
	const dp = tri.map((v, i) => (i === 0 ? [v[i]] : Array.from({ length: v.length }).fill(0)));

	for (let i = 1; i < tri.length; i++) {
		for (let j = 0; j < tri[i].length; j++) {
			if (j === 0) {
				dp[i][j] = tri[i][j] + dp[i - 1][j];
			} else if (j === tri[i].length - 1) {
				dp[i][j] = tri[i][j] + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(tri[i][j] + dp[i - 1][j - 1], tri[i][j] + dp[i - 1][j]);
			}
		}
	}
	console.log(dp);
	console.log(Math.max(...dp[dp.length - 1]));
};

solution2([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
