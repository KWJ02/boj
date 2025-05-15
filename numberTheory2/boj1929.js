// 문제 : 소수 구하기
// 자연수 M과 N이 주어질 때, M이상 N이하의 모든 소수를 출력

// 범위가 커지면 커질수록, 소수 찾기 알고리즘은 에라토스테네스의 체가 효율적임
const solution = (M, N) => {
	const isPrime = (n) => {
		if (n < 2) return false;
		if (n === 2) return true;
		if (n % 2 === 0) return false;

		const iter = Math.sqrt(n);

		for (let i = 2; i <= iter; i++) {
			if (n % i === 0) return false;
		}

		return true;
	};

	for (let i = M; i <= N; i++) {
		if (isPrime(i)) {
			console.log(i);
		}
	}
};

// 에라토스테네스의 체
// 1. 구하고자 하는 범위까지 배열 생성, 모두 true로 설정
// 2. 2부터 Math.sqrt(N)까지 isPrime 순회. isPrime[i]가 true일 경우, 그 수에 대한 모든 배수는 모두 false로 전환
// 3. 순회 후 isPrime이 true인 i가 소수
const solution2 = (M, N) => {
	const isPrime = Array(N + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i * i <= N; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j <= N; j += i) {
				isPrime[j] = false;
			}
		}
	}

	let result = '';
	for (let i = M; i <= N; i++) {
		if (isPrime[i]) result += i + '\n';
	}
	// process.stdout.write로 출력시간 감소(I/O 최적화)
	// console : 2768ms -> process.stdout.write : 196ms
	process.stdout.write(result);

	// 일일이 콘솔로 찍는 건 백준 채점 테케에서 굉장한 시간이 소요됨
	// for (let i = 2; i < isPrime.length; i++) {
	// 	if (isPrime[i]) console.log(i);
	// }
};

solution(3, 16);
