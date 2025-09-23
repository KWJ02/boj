// 문제 : 시험 감독
// 시험장 내 응시자들을 감시하기 위한 감독관들의 최소 수

const solution = (classes, f, s) => {
	let cnt = 0;

	for (let i = 0; i < classes.length; i++) {
		classes[i] -= f;
		cnt += 1;
		if (classes[i] <= 0) continue;
		cnt += Math.ceil(classes[i] / s);
	}

	console.log(cnt);
};

solution([1000000, 1000000, 1000000, 1000000, 1000000], 5, 7);
