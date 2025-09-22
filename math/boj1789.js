// 문제 : 수들의 합
// 94%에서 실패 -> dp길이에 0값을 포함한게 문제였음
const solution = (s) => {
	let total = 0;
	let count = 0;

	for (let i = 1; total < s; i++) {
		total += i;
		if (total > s) break;
		count++;
	}

	console.log(count);
};

solution(200);

/**
 * const dp = [1]로 초기화하고
 * for (let i = 1; i + dp[i - 1] <= s; i++) {
		dp[i] = dp[i - 1] + i;
	}
	로 돌려야 했을듯

	근데 그냥 dp길이에서 -1 해버림
 */
