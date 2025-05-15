// 문제 : 베르트랑 공준
// 자연수 n이 주어질 때, n ~ 2n 사이에 존재하는 소수 개수 출력

const solution = (n) => {
	const isPrime = Array(n * 2 + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i * i <= 2 * n; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j <= 2 * n; j += i) {
				isPrime[j] = false;
			}
		}
	}

	console.log(isPrime.filter((v, i) => v && n < i && i <= 2 * n).length);
};

solution(1);
solution(10);
solution(13);
solution(100);
solution(1000);
solution(10000);
solution(100000);
