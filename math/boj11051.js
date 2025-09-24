// 문제 : 이항 계수 2
// (n k) -> n개 중에서 k개를 고르는 경우의 수 (조합, nCk).

const solution = (n, k) => {
	let dec = 1n;
	let num = 1n;

	for (let i = 0; i < k; i++) {
		dec *= BigInt(n - i);
	}

	for (let i = k; i > 0; i--) {
		num *= BigInt(i);
	}

	console.log(String(BigInt(dec / num) % 10007n));
};

solution(5, 2);
