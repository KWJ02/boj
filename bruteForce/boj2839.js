// 문제 : 설탕 배달
// 거스름돈 문제랑 비슷

// 브루트포스 방식
// const solution = (weight) => {
// 	let min = Infinity;

// 	for (let i = 0; i <= weight / 5; i++) {
// 		for (let j = 0; j <= weight / 3; j++) {
// 			if (5 * i + 3 * j === weight) {
// 				min = Math.min(min, i + j);
// 			}
// 		}
// 	}

// 	if (min === Infinity) {
// 		console.log(-1);
// 	} else {
// 		console.log(min);
// 	}
// };

// solution(18);
// solution(4);
// solution(6);
// solution(9);
// solution(11);

// 수학적 접근 -> 브루트 포스 대비 시간 절약
const solution2 = (weight) => {
	let count = 0;

	while (weight) {
		if (weight >= 3 && weight % 5 !== 0) {
			count++;
			weight -= 3;
			continue;
		}

		if (weight % 5 === 0) {
			count++;
			weight -= 5;
			continue;
		}

		if (weight % 3 !== 0 && weight % 5 !== 0) {
			return -1;
		}
	}

	return count;
};

// 수학적 접근 코드 최적화 // 브루트 포스 : 156ms -> 100, 104ms
const solution3 = (weight) => {
	let count = 0;

	while (weight >= 0) {
		if (weight % 5 === 0) {
			return count + weight / 5;
		}
		weight -= 3;
		count++;
	}

	return -1;
};

console.log(solution3(4));
console.log(solution3(6));
console.log(solution3(9));
console.log(solution3(11));
console.log(solution3(18));
console.log(solution3(24));
