// 문제 : 쉽게 푸는 문제
// 1 2 2 3 3 3 4 4 4 4 5 ... 의 수열을 생성하고 구간의 합 구하기

const solution = (s, e) => {
	const arr = Array.from({ length: e }).fill(0);
	let idx = 0;
	let n = 1;

	while (idx < arr.length) {
		for (let i = 0; i < n; i++) {
			if (idx >= arr.length) break;
			arr[idx] = n;
			idx++;
		}
		n++;
	}

	const prefix = Array.from({ length: arr.length + 1 }).fill(0);

	for (let i = 1; i < prefix.length; i++) {
		prefix[i] = prefix[i - 1] + arr[i - 1];
	}

	console.log(prefix[e] - prefix[s - 1]);
};

solution(3, 7);
