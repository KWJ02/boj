// 문제 : 신나는 함수 실행
// 재귀라고 했는데 dp로 해야할듯?

const dp = Array.from({ length: 21 }, () => Array.from({ length: 21 }, () => Array.from({ length: 21 }).fill(false)));
const result = [];
const solution = (a, b, c) => {
	const w = (a, b, c) => {
		if (a <= 0 || b <= 0 || c <= 0) return 1;
		if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

		if (dp[a][b][c] !== false) {
			return dp[a][b][c];
		}

		// if (a < b && b < c) {
		// 	w(a, b, c - 1) + w(a, b - 1, c) - w(a, b - 1, c - 1);
		// } else {
		// 	w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
		// }

		if (a < b && b < c) {
			dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c) - w(a, b - 1, c - 1);
		} else {
			dp[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
		}

		return dp[a][b][c];
	};

	result.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
};

solution(15, 15, 15);
console.log(result.join('\n'));
