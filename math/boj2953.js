// 문제 : 나는 요리사다
// 점수 총합 중 1등 인덱스 및 점수 출력

const solution = (scores) => {
	let idx = null;
	let max = -Infinity;

	for (let i = 0; i < scores.length; i++) {
		const score = scores[i].reduce((a, c) => a + c, 0);
		if (score > max) {
			max = score;
			idx = i;
		}
	}

	console.log(idx + 1, max);
};

solution([
	[5, 4, 4, 5],
	[5, 4, 4, 4],
	[5, 5, 4, 4],
	[5, 5, 5, 4],
	[4, 4, 4, 5],
]);
