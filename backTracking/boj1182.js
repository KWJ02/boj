// 문제 : 부분수열의 합

const solution = (arr, s) => {
	let count = 0;

	const dfs = (idx, sum) => {
		if (idx === arr.length) {
			if (sum === s) count++;
			return;
		}

		dfs(idx + 1, sum + arr[idx]);
		dfs(idx + 1, sum);
	};

	dfs(0, 0);

	if (s === 0) count--;

	console.log(count);
};

solution([-7, -3, -2, 5, 8], 0);
