// 문제 : 스타트와 링크
// n*n 꼴의 점수판에서, Sij와 Sji의 합 간의 차이 출력

const solution = (board) => {
	const n = board.length;
	const visited = Array.from(n).fill(false);
	let min = Infinity;

	const dfs = (depth, start) => {
		if (depth === n / 2) {
			let startt = 0;
			let linkt = 0;

			for (let i = 0; i < n; i++) {
				for (let j = i + 1; j < n; j++) {
					if (visited[i] && visited[j]) {
						startt += board[i][j] + board[j][i];
					} else if (!visited[i] && !visited[j]) {
						linkt += board[i][j] + board[j][i];
					}
				}
			}
			min = Math.min(min, Math.abs(startt - linkt));
		}

		for (let i = start; i < n; i++) {
			if (!visited[i]) {
				visited[i] = true;
				dfs(depth + 1, i + 1);
				visited[i] = false;
			}
		}
	};

	dfs(0, 0);
	console.log(min);
};

solution([
	[0, 5, 4, 5, 4, 5, 4, 5],
	[4, 0, 5, 1, 2, 3, 4, 5],
	[9, 8, 0, 1, 2, 3, 1, 2],
	[9, 9, 9, 0, 9, 9, 9, 9],
	[1, 1, 1, 1, 0, 1, 1, 1],
	[8, 7, 6, 5, 4, 0, 3, 2],
	[9, 1, 9, 1, 9, 1, 0, 9],
	[6, 5, 4, 3, 2, 1, 9, 0],
]);
