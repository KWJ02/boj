// 문제 : 셀프 넘버
// 1부터 10000 사이 생성자가 없는 수 모두 출력

const solution = (n) => {
	const arr = Array.from({ length: n + 1 }).fill(true);
	const result = [];

	for (let i = 1; i < arr.length; i++) {
		const numDigitsSum = String(i)
			.split('')
			.map(Number)
			.reduce((a, c) => a + c, 0);
		if (i + numDigitsSum < arr.length) arr[i + numDigitsSum] = false;
	}

	for (let i = 1; i < arr.length; i++) {
		if (arr[i]) result.push(i);
	}

	console.log(result.join(' '));
};

solution(10000);
