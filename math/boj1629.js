// 문제 : 곱셈
// 얘도 dp로? -> 최대 21억이기 때문에 O(n)은 무조건 초과
// O(log n) 알고리즘 사용 => 분할정복 (빠른 거듭제곱)

// const solution = (a, b, c) => {
// 	const dp = [0, BigInt(a) % BigInt(c)];

// 	for (let i = 2; i <= b; i++) {
// 		dp[i] = (dp[i - 1] * BigInt(a)) % BigInt(c);
// 	}

// 	console.log(String(dp[b]));
// };

/**
 * a^b를 직접 구하는 건 메모리 초과
 * a^b를 a^(b/2)로 분할해야 함
 * b가 짝수일땐 a^(b/2), b가 홀수일땐 a^(b/2)*a
 *
 * a^b mod m=((a mod m)^b) mod m
 * 와 같은 모듈러 연산의 기본 규칙을 이용하여 빠른 거듭제곱 구하기
 * -> 구하는 과정에 분할정복 사용
 *
 * @param {*} a
 * @param {*} b
 * @param {*} c
 */

const solution = (a, b, c) => {
	const mod = (a, b, c) => {
		a = BigInt(a);
		b = BigInt(b);
		c = BigInt(c);

		if (b === 0n) return 1 % c;
		if (b === 1n) return a % c;

		let half = mod(a, b / 2n, c); // a^(b/2) % c의 결과가 half에 저장
		half = (half * half) % c;

		if (b % 2n === 0n) {
			return half;
		} else {
			return (half * (a % c)) % c;
		}
	};

	console.log(String(mod(a, b, c)));
};

solution(2, 222, 41);
