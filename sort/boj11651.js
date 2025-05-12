// 문제 : 좌표 정렬하기2
// 좌표 정렬하기 문제와 비슷, 출력 기준을 x->y 에서 y->x로만 변경

const solution = (coors) => {
	console.log(
		coors
			.sort((a, b) => {
				if (a[1] === b[1]) {
					return a[0] - b[0];
				}

				return a[1] - b[1];
			})
			.map((v) => v.join(' '))
			.join('\n')
			.trim()
	);
};

solution([
	[0, 4],
	[1, 2],
	[1, -1],
	[2, 2],
	[3, 3],
]);
