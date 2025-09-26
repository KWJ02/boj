// 문제 : 카잉 달력
// 종말 해 M, N이 주어질 때, x,y로 입력된 해가 몇번째 해인지 출력
// 중국인의 나머지 정리

const solution = (m, n, x, y) => {
	const gcd = (a, b) => {
		return b === 0 ? a : gcd(b, a % b);
	};
	const lcm = (m * n) / gcd(m, n);

	let cnt = x;

	while (cnt <= lcm) {
		// 여기가 핵심로직
		if ((cnt - y) % n === 0) {
			console.log(cnt);
			return;
		}

		cnt += m;
	}

	console.log(-1);
};

solution(10, 12, 3, 9);
