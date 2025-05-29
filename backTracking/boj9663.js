// 문제 : N-Queen
// NxN 크기의 체스판 위에, 서로 공격할 수 없는 N개의 퀸 배치 모든 경우의 수
// 퀸 공격 경로 : 본인 좌표 기준 행과 열, 대각선 총 8방향으로 공격가능

const solution = (n) => {
	const cols = Array.from({ length: n }).fill(false);
	const diag1 = Array(2 * n).fill(false);
	const diag2 = Array(2 * n).fill(false);
	let c = 0;

	const backTrack = (row) => {
		if (row === n) {
			c++;
			return;
		}

		for (let i = 0; i < n; i++) {
			if (cols[i] || diag1[row - i + n - 1] || diag2[row + i]) continue;

			cols[i] = diag1[row - i + n - 1] = diag2[row + i] = true;
			backTrack(row + 1);
			cols[i] = diag1[row - i + n - 1] = diag2[row + i] = false;
		}
	};

	backTrack(0);
	console.log(c);
};

solution(8);
