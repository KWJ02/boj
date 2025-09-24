// 문제 : 막대기
// 입력 길이 X가 주어지면, 64cm에서 Xcm가 될때까지 자르고 붙이는 과정 반복

const solution = (x) => {
	const sqrt = new Set([1, 2, 4, 8, 16, 32, 64]);

	if (sqrt.has(x)) {
		console.log(1);
		return;
	}

	let cnt = 0;

	while (x > 0) {
		const max = [...sqrt].filter((v) => v <= x);
		x -= max[max.length - 1];
		cnt++;
	}

	console.log(cnt);
};

solution(48);
