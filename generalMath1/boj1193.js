// 문제 : 분수찾기
// 벌집 문제와 유사

/**
 * 
1/1 1/2 1/3 1/4 1/5 1/6

2/1 2/2 2/3 2/4 2/5 2/6

3/1 3/2 3/3 3/4 3/5 3/6

4/1 4/2 4/3 4/4 4/5 4/6

5/1 5/2 5/3 5/4 5/5 5/6

6/1 6/2 6/3 6/4 6/5 6/6


1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> 1/3 -> 1/4 -> 2/3 -> ...
대각선 지그재그로 이동하는 방식

 */

/**
 * 각 단계(phase)별 1 2 3 4 5 6.. 개씩 증가
 * 각 단계의 분자/분모 합 = 단계 + 1
 * @param {*} phase
 */
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
