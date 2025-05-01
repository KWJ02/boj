// 문제 : 색종이

/**
3
3 7 => 좌측 하단 지점 :(3,17)~(13,17)-(3,7)~(13,7)
15 7
5 2

=> 260

좌표 그려두고
해당되는 좌표에 전부 1씩 덧셈

1인 좌푯값만 계산
 */

const board = Array.from({ length: 100 }).map((_) => Array.from({ length: 100 }).fill(0));
let count = 0;

const solution = (coors) => {
	// coor[0] -> x좌표
	const [x, y] = coors;

	for (let r = 0; r < 10; r++) {
		for (let c = 0; c < 10; c++) {
			board[y + r][x + c] += 1;
		}
	}
};

solution([3, 7]);
solution([15, 7]);
solution([5, 2]);

for (let i = 0; i < board.length; i++) {
	for (let j = 0; j < board[i].length; j++) {
		if (board[i][j] >= 1) count++;
	}
}

console.log(count);
