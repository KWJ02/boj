// 문제 : 구간 합 구하기 4

const solution = (arr, inter) => {
	const prefix = Array.from({ length: arr.length }).fill(0);
	const result = [];

	for (let i = 1; i <= arr.length; i++) {
		// 누적합은 기본적으로 1-based이기 때문에 arr에 접근할땐 i-1로 써야함
		// prefix의 길이가 arr의 길이보다 1만큼 더 길기 때문에 맞춰야함
		prefix[i] = prefix[i - 1] + arr[i - 1];
	}

	for (let i = 0; i < inter.length; i++) {
		const [j, k] = inter[i];
		result.push(prefix[k] - prefix[j - 1]);
	}

	console.log(result.join('\n'));
};

solution(
	[5, 4, 3, 2, 1],
	[
		[1, 3],
		[2, 4],
		[5, 5],
	]
);
