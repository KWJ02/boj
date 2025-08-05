// 문제 : 더하기 사이클
// 0 ~ 99까지의 정수 n이 주어질때, 각 자릿수의 합을 더하고 더한 결과값을 일의 자릿수와 붙였을때, n으로 돌아올때까지 걸리는 사이클 개수

const solution = (n) => {
	let st = n;
	let c = 1;

	if (n < 10) {
		st *= 10;
		n *= 10; // << 10보다 작은 값의 초기값은 10을 곱한값;;
	}

	st += '';

	while (true) {
		const digits = st.split('').map(Number);
		const sum = [...String(digits.reduce((a, c) => a + c, 0))];

		if (sum.length === 1) {
			digits[0] = digits[1];
			digits[1] = sum[0];
		} else {
			digits[0] = digits[1];
			digits[1] = sum[sum.length - 1];
		}

		st = digits.join('');
		if (n === Number(st) && String(n).length === st.length) break;
		c++;
	}

	console.log(c);
};

solution(71);
