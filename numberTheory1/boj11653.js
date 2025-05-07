// 문제 : 소인수분해
// 자연수 N이 주어질 때, 소인수 출력

const solution = (num) => {
	while (num % 2 === 0) {
		console.log(2);
		num /= 2;
	}

	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		while (num % i === 0) {
			console.log(i);
			num /= i;
		}
	}

	// 남은 수가 1이 아니라면, 범위 안에 존재하지 않는 큰 소수.
	if (num > 1) console.log(num);
};

solution(9991);
