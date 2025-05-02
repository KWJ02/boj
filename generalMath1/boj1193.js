// 문제 : 분수찾기
// 벌집 문제와 유사

const solution = (phase) => {
	let iter = 1;
	let diff = 1;

	while (phase - diff > 0) {
		diff += ++iter;
	}

	const sum = iter + 1;
	let numerator = 0; // 분자
	let denominator = 0; // 분모

	// 짝수 단계라면 분자가 1, 홀수 단계라면 분모가 1
	if (iter % 2 === 0) {
		numerator = 1;
		denominator = sum - 1;
	} else {
		numerator = sum - 1;
		denominator = 1;
	}

	// phase - (diff - iter) << 얘가 핵심이었던 문제
	for (let i = 1; i < phase - (diff - iter); i++) {
		// 짝수 단계면 분자값 증가, 분모값 감소. 홀수 단계면 분자값 감소, 분모값 증가
		if (iter % 2 === 0) {
			numerator++;
			denominator--;
		} else {
			numerator--;
			denominator++;
		}
	}

	console.log(`${numerator}/${denominator}`);
};

for (k = 1; k <= 10; k++) {
	solution(k);
}
