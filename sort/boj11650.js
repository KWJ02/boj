// 문제 : 좌표 정렬하기
// 주어진 좌표를 오름차순으로 정렬

// const solution = (coors) => {
// 	console.log(
// 		coors
// 			.sort((a, b) => {
// 				const [ax, ay] = a.split(' ');
// 				const [bx, by] = b.split(' ');

// 				if (ax !== bx) return ax - bx;
// 				return ay - by;
// 			})
// 			.join('\n')
// 	);
// };

// solution(['3 4', '1 1', '1 -1', '2 2', '3 3']);

// solution : 문자를 받아서 정렬할 때마다 split 연산 -> 1424ms
// solution2 : 좌표쌍을 배열로 갖는 이차원 배열로 넘겨 받으면서 자체적으로 정렬 후 join으로 출력 -> 424ms
const solution2 = (arr) => {
	console.log(
		arr
			.sort((a, b) => {
				if (a[0] !== b[0]) return a[0] - b[0];
				return a[1] - b[1];
			})
			.map((v) => v.join(' '))
			.join('\n')
	);
};

solution2([
	[3, 4],
	[1, 1],
	[1, -1],
	[2, 2],
	[3, 3],
]);
