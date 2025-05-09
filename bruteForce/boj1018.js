// 문제 : 체스판 다시 칠하기
// B,W 번갈아가며 칠해져 있지 않은 영역의 수 출력

/*

1. 8,8
[
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'B', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W']
]

2. 10, 13
[
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B']
]

4. 9, 23
[
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','W']
]

5. 10,10
[
	['B','B','B','B','B','B','B','B','B','B'],
	['B','B','W','B','W','B','W','B','W','B'],
	['B','W','B','W','B','W','B','W','B','B'],
	['B','B','W','B','W','B','W','B','W','B'],
	['B','W','B','W','B','W','B','W','B','B'],
	['B','B','W','B','W','B','W','B','W','B'],
	['B','W','B','W','B','W','B','W','B','B'],
	['B','B','W','B','W','B','W','B','W','B'],
	['B','W','B','W','B','W','B','W','B','B'],
	['B','B','B','B','B','B','B','B','B','B']
]


6. 8,8
[
	['W','B','W','B','W','B','W','B'],
	['B','W','B','W','B','W','B','W'],
	['W','B','W','B','W','B','W','B'],
	['B','W','B','B','B','W','B','W'],
	['W','B','W','B','W','B','W','B'],
	['B','W','B','W','B','W','B','W'],
	['W','B','W','B','W','W','W','B'],
	['B','W','B','W','B','W','B','W']
]

7. 11, 12
[
	['B','W','W','B','W','W','B','W','W','B','W','W'],
	['B','W','W','B','W','B','B','W','W','B','W','W'],
	['W','B','W','W','B','W','B','B','W','W','B','W'],
	['B','W','W','B','W','B','B','W','W','B','W','W'],
	['W','B','W','W','B','W','B','B','W','W','B','W'],
	['B','W','W','B','W','B','B','W','W','B','W','W'],
	['W','B','W','W','B','W','B','B','W','W','B','W'],
	['B','W','W','B','W','B','W','W','W','B','W','W'],
	['W','B','W','W','B','W','B','B','W','W','B','W'],
	['B','W','W','B','W','B','B','W','W','B','W','W'],
	['W','B','W','W','B','W','B','B','W','W','B','W']
]
 */

/**
    row, col(N x M)의 길이가 9 이상이라면
    무조건 8x8로 자르는데,
    8x8로 자르는 시작지점은 아무곳이나 가능함.
    8x8로 자르는 모든 경우의 수를 구해서, 그 경우의 수 마다
    바꿔야할 count개수 중 최소로 바꿀 개수의 자르는 경우를 리턴하는거임
    0~row-8, 0~col-8 가능한 8x8 영역 모조리 돌아다니면서 바꿔야되는 수를 저장해두고 최솟값 뽑기
 */
/***/
const solution = (board, row, col) => {
	const stack = [];
	let arr = Array.from({ length: 8 })
		.fill(0)
		.map((_) => Array.from({ length: 8 }).fill(0));

	const maxIterRow = row - 8; // 행 N
	const maxIterCol = col - 8; // 열 M
	const nod = (maxIterRow + 1) * (maxIterCol + 1) * 2; // 패턴이 W거나 B인 경우
	let rIdx = 0;
	let cIdx = 0;

	while (stack.length < nod) {
		let count = 0;
		for (let i = rIdx; i < 8 + rIdx; i++) {
			for (let j = cIdx; j < 8 + cIdx; j++) {
				arr[i - rIdx][j - cIdx] = board[i][j];
			}
		}

		let def = 'W';

		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				// 짝수 행일 때
				if (i % 2 === 0) {
					// 짝수 열이 def가 아닌 경우 다시 칠해야 함
					if (j % 2 === 0 && arr[i][j] !== def) count++;
					// 홀수 열이 def인 경우 다시 칠해야 함
					if (j % 2 === 1 && arr[i][j] === def) count++;
				} else {
					// 짝수 열이 def인 경우 다시 칠해야 함
					if (j % 2 === 0 && arr[i][j] === def) count++;
					// 홀수 열이 def가 아닌 경우 다시 칠해야 함
					if (j % 2 === 1 && arr[i][j] !== def) count++;
				}
			}
		}

		stack.push(count);

		count = 0;
		def = 'B';

		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				// 짝수 행일 때
				if (i % 2 === 0) {
					// 짝수 열이 def가 아닌 경우 다시 칠해야 함
					if (j % 2 === 0 && arr[i][j] !== def) count++;
					// 홀수 열이 def인 경우 다시 칠해야 함
					if (j % 2 === 1 && arr[i][j] === def) count++;
				} else {
					// 짝수 열이 def인 경우 다시 칠해야 함
					if (j % 2 === 0 && arr[i][j] === def) count++;
					// 홀수 열이 def가 아닌 경우 다시 칠해야 함
					if (j % 2 === 1 && arr[i][j] !== def) count++;
				}
			}
		}

		stack.push(count);

		if (cIdx < maxIterCol) {
			cIdx++;
			continue;
		}

		if (cIdx === maxIterCol) {
			cIdx = 0;
			rIdx++;
		}
	}

	console.log(Math.min(...stack));
};

solution(
	[
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
		['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B'],
		['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B'],
	],
	10,
	13
);

/**
 	최적화 코드
	체스판 8x8을 까는건 안에서 그대로 돌리고,
	8x8보다 큰 경우의 체스판은 바깥 for문으로 돌리기
	처음 생각했던거 이렇게 구현했으면 됐을텐데,
	def가 정해지면, 짝수행의 짝수열과 홀수행의 홀수열이 def와 같아야한다는걸
	(i+j)%2 === 0 으로 정해버릴 수 있음;;
	흰 판 검은 판 굳이 두개로 나누지말고
	가정을 하나로 묶어서 서로 다른 셈으로 계산하는 미친방법
 */
/***/
// const solution2 = (board, row, col) => {
// 	const maxIterRow = row - 8;
// 	const maxIterCol = col - 8;
// 	let minCount = Infinity;

// 	for (let mr = 0; mr <= maxIterRow; mr++) {
// 		for (let mc = 0; mc <= maxIterCol; mc++) {
// 			let blackCount = 0;
// 			let whiteCount = 0;

// 			for (let i = 0; i < 8; i++) {
// 				for (let j = 0; j < 8; j++) {
// 					const cur = board[mr + i][mc + j];
// 					const isDefB = (i + j) % 2 === 0 ? 'B' : 'W';
// 					const isDefW = (i + j) % 2 === 0 ? 'W' : 'B';

// 					if (cur !== isDefB) blackCount++;
// 					if (cur !== isDefW) whiteCount++;
// 				}
// 			}

// 			minCount = Math.min(minCount, blackCount, whiteCount);
// 		}
// 	}

// 	console.log(minCount);
// };

// solution2(
// 	[
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
// 		['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
// 		['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B'],
// 		['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B'],
// 	],
// 	10,
// 	13
// );
