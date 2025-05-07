// 문제 : 소수 찾기
// 주어진 N 개의 숫자들 중 소수의 개수를 판별

let count = 0;

const solution = (num) => {
	if (num === 1) return false;

	const iter = Math.sqrt(num);

	for (let i = 2; i <= iter; i++) {
		if (num % i === 0) return false;
	}

	return true;
};

// if (solution(4)) count++;
const input = [1, 3, 5, 7, 9, 10, 11, 12];
for (let i = 0; i < input.length; i++) {
	if (solution(input[i])) count++;
}

console.log(count);
