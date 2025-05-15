// 문제 : 골드바흐 파티션
// 짝수 n이 주어졌을때, 소수로만 합을 구성하는 경우의 수 출력

const solution = (num) => {
	const isPrime = Array(num + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i * i <= num; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j <= num; j += i) {
				isPrime[j] = false;
			}
		}
	}

	let count = 0;
	for (let a = 2; a <= num / 2; a++) {
		const b = num - a;
		if (isPrime[a] && isPrime[b]) count++;
	}

	console.log(count);
};

solution(6);
solution(8);
solution(10);
solution(12);
solution(100);

// num에 2부터 1씩 증가하며 두 수로 분할하고, 그 두 수가 각각 소수인지 판별하는 코드
// 반복연산이 너무 많음 -> 그냥 num을 에라토스테네스의 체로 거르고 i, j로 분할 후 둘 다 true인지 생각하는게 좋을듯
// const timeout = (num) => {
// 	const isPrime = (n) => {
// 		if (n === 0 || n === 1) return false;
// 		if (n === 2) return true;
// 		if (n % 2 === 0) return false;

// 		for (let i = 2; i * i <= n; i++) {
// 			if (n % i === 0) return false;
// 		}
// 		return true;
// 	};

// 	let count = 0;
// 	let i = 2;
// 	let j = Infinity;

// 	while (i <= j) {
// 		j = num - i;
// 		if (isPrime(i++) && isPrime(j)) count++;
// 	}

// 	console.log(count);
// };
