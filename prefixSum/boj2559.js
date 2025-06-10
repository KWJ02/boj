// 문제 : 수열
// 온도의 수열이 주어질 때, 연속된 k일의 합이 최대가 되는 온도의 합 출력

const solution = (arr, k) => {
	const prefix = Array.from({ length: arr.length + 1 }).fill(0);
	let max = -Infinity;

	for (let i = 1; i < prefix.length; i++) {
		prefix[i] = prefix[i - 1] + arr[i - 1];
	}

	for (let i = k; i < prefix.length; i++) {
		max = Math.max(max, prefix[i] - prefix[i - k]);
	}

	console.log(max);
};

solution([3, -2, -4, -9, 0, 3, 7, 13, 8, -3], 5);

/**
 * 
	for (let i = 1; i <= arr.length; i++) {
		prefix[i] = prefix[i - 1] + arr[i - 1];
	}

	for (let i = k; i < prefix.length; i++) {
		max = Math.max(max, prefix[i] - prefix[i - k]);
	}

	console.log(max);
 */
