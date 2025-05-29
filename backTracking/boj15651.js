// 문제 : N과 M 3
// 1부터 N까지의 자연수 중 중복을 허용하여 M개를 뽑은 수열 출력

const solution = (n, m) => {
	const nums = [];

	const dfs = (arr) => {
		if (arr.length === m) {
			nums.push([...arr]);
			return;
		}

		for (let i = 1; i <= n; i++) {
			arr.push(i);
			dfs(arr);
			arr.pop();
		}
	};

	dfs([]);
	console.log(nums.map((v) => v.join(' ')).join('\n'));
};

solution(4, 2);
