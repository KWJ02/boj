// 문제 : 다음 소수
// 주어진 숫자보다 큰 숫자 중 가장 작은 소수 출력

const solution = (nums) => {
	// 자연수가 짝수이거나, 2보다 작으면 소수가 아님
	const isPrime = (n) => {
		if (n < 2) return false;
		if (n === 2) return true;
		// 짝수인 수는 소수가 아니지만, 2는 유일하게 짝수이면서 소수인 수임
		if (n % 2 === 0) return false;

		const iter = Math.sqrt(n);

		for (let i = 2; i <= iter; i++) {
			if (n % i === 0) return false;
		}

		return true;
	};

	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		while (true) {
			if (isPrime(num)) {
				break;
			} else {
				num++;
			}
		}
		console.log(num);
	}
};

solution([49, 75]);
