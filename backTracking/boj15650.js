// 문제 : N과 M 2
// 1부터 N까지의 자연수 중 중복없이 M개를 선택한 수열 출력

const solution = (n, m) => {
	const nums = [];

	const dfs = (arr, idx) => {
		if (arr.length === m) {
			nums.push([...arr]);
			return;
		}

		for (let i = idx; i <= n; i++) {
			arr.push(i);
			dfs(arr, i + 1);
			arr.pop(i);
		}
	};

	dfs([], 1);
	console.log(nums.map((v) => v.join(' ')).join('\n'));
};

solution(4, 2);
