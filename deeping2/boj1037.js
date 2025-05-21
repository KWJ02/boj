// 문제 : 약수
// 1과 자기 자신이 아닌 약수들을 '진짜 약수'라 칭할 때,
// 진짜 약수의 개수로 N을 찾는 것.
// 진짜 약수의 개수가 홀수일 경우 -> 진짜 약수들 중 중간값의 제곱수
// 진짜 약수의 개수가 짝수일 경우 -> 진짜 약수들 중 가장 큰 약수와 가장 작은 약수의 곱

const solution = (real) => {
	real.sort((a, b) => a - b);
	if (real.length % 2 === 1) {
		console.log(real[Math.floor(real.length / 2)] ** 2);
	} else {
		console.log(real[0] * real.at(-1));
	}
};

solution([2]);
solution([3, 4, 2, 12, 6, 8]);
solution([14, 26456, 2, 28, 13228, 3307, 7, 23149, 8, 6614, 46298, 56, 4, 92596]);

// 약수 개수와 상관없이 길이가 2 이상이라면 그냥 0과 at(-1)끼리 곱하면 됨
// solution : 164ms -> solution2 : 104ms
const solution2 = (real) => {
	real.sort((a, b) => a - b);
	if (real.length === 1) {
		console.log(real[0] ** 2);
	} else {
		console.log(real[0] * real[real.length - 1]);
	}
};
