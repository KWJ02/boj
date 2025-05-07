// 문제 : 소수
// 자연수 N과 M사이에 존재하는 소수들의 합과 최솟값 출력

const solution = (start, end) => {
	let prime = [];

	const isPrime = (num) => {
		if (num === 1) return false;

		const iter = Math.sqrt(num);

		for (let j = 2; j <= iter; j++) {
			if (num % j === 0) return false;
		}

		return true;
	};

	for (let i = start; i <= end; i++) {
		if (isPrime(i)) {
			prime.push(i);
		}
	}

	if (prime.length === 0) {
		console.log(-1);
		return;
	}

	console.log(prime.reduce((a, c) => a + c, 0));
	console.log(prime[0]);
};

solution(64, 65);
