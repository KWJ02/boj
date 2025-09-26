// 문제 : 에라토스테네스의 체

const solution = (n, k) => {
	const isPrime = Array.from({ length: n + 1 }).fill(true);
	isPrime[0] = isPrime[1] = false;
	let cnt = 0;

	for (let i = 2; i < isPrime.length; i++) {
		if (isPrime[i]) {
			cnt++;
			isPrime[i] = false;
		}

		if (cnt === k) {
			console.log(i);
			return;
		}

		for (let j = i * i; j < isPrime.length; j += i) {
			if (isPrime[j]) {
				isPrime[j] = false;
				cnt++;
			}

			if (cnt === k) {
				console.log(j);
				return;
			}
		}
	}
};

solution(15, 12);
