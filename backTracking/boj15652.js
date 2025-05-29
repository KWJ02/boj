// 문제 : N과 M 4
// 1부터 N까지의 자연수 중 중복을 허용하고 오름차순 형태로 M개를 뽑은 수열을 출력
// 1 1 1, 1 1 2, 1 2 3 등은 가능, 2 1 1, 2 1 3 이런 형태는 오름차순이 아니므로 패스

const solution = (n, m) => {
	const nums = [];

	const backTrack = (arr) => {
		if (arr.length === m) {
			nums.push(arr.join(' '));
			return;
		}

		for (let i = 1; i <= n; i++) {
			if (arr[arr.length - 1] > i) continue;
			arr.push(i);
			backTrack(arr);
			arr.pop();
		}
	};

	backTrack([]);
	console.log(nums.join('\n'));
};

solution(4, 2);
