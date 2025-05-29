// 문제 : 스도쿠
// 가로줄, 세로줄, 3x3 사각형 내부에 1~9까지의 숫자가 1개씩 존재하게 출력

const sudoku = [
	[0, 3, 5, 4, 6, 9, 2, 7, 8],
	[7, 8, 2, 1, 0, 5, 6, 0, 9],
	[0, 6, 0, 2, 7, 8, 1, 3, 5],
	[3, 2, 1, 0, 4, 6, 8, 9, 7],
	[8, 0, 4, 9, 1, 3, 5, 0, 6],
	[5, 9, 6, 8, 2, 0, 4, 1, 3],
	[9, 1, 7, 6, 5, 2, 0, 8, 0],
	[6, 0, 3, 7, 0, 1, 9, 5, 2],
	[2, 5, 8, 3, 9, 4, 7, 6, 0],
];

const solution = (board) => {
	const zero = [];

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) {
				zero.push([i, j]);
			}
		}
	}

	const isValid = (i, j, num) => {
		for (let k = 0; k < 9; k++) {
			if (board[i][k] === num || board[k][j] === num) return false;
		}

		const dx = Math.floor(i / 3) * 3;
		const dy = Math.floor(j / 3) * 3;

		for (let row = 0; row < 3; row++) {
			for (let col = 0; col < 3; col++) {
				if (board[row + dx][col + dy] === num) return false;
			}
		}

		return true;
	};

	const backTrack = (idx) => {
		if (idx === zero.length) {
			console.log(board.map((v) => v.join(' ')).join('\n'));
			process.exit();
		}

		const [i, j] = zero[idx];

		for (let c = 1; c < 10; c++) {
			if (isValid(i, j, c)) {
				board[i][j] = c;
				backTrack(idx + 1);
				board[i][j] = 0;
			}
		}
	};

	backTrack(0);
};

solution(sudoku);
