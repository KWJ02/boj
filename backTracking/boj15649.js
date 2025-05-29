// 문제 : N과 M 1
// 자연수 N과 M이 주어졌을때, 1부터 N 중 M개의 가능한 모든 수열을 출력

const solution = (n, m) => {
	const visited = Array(n + 1).fill(false);
	const nums = [];

	const backTrack = (a) => {
		if (a.length === m) {
			nums.push([...a]);
			return;
		}

		for (let i = 1; i <= n; i++) {
			if (visited[i]) continue;

			visited[i] = true;
			a.push(i);
			backTrack(a);
			a.pop();
			visited[i] = false;
		}
	};

	backTrack([]);
	console.log(nums.map((v) => v.join(' ')).join('\n'));
};

solution(5, 3);
