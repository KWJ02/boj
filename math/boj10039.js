// 문제 : 평균 점수
// 40점 미만인 사람들의 점수는 40점으로 고정 후 5명의 점수 평균 구하기

const solution = (arr) => {
	const adj = arr.map((v) => {
		if (v < 40) {
			return 40;
		} else {
			return v;
		}
	});

	console.log(adj.reduce((a, c) => a + c, 0) / 5);
};

solution([10, 65, 100, 30, 95]);
