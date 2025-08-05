// 문제 : 요세푸스 순열
// n과 k가 주어질때, 1부터 n까지있고, k번째마다 그 수를 제거할때, 제거되는 수의 순서

const solution = (n, k) => {
	const arr = Array.from({ length: n }).map((_, i) => i + 1);
	const result = [];
	let kill = 0;
	let idx = 0;
	let c = 1;

	while (kill < n) {
		if (c === k) {
			if (arr[idx] === -1) {
				idx++;
				if (idx > arr.length - 1) idx = 0;
				continue;
			}

			kill++;
			c = 1;
			result.push(arr[idx]);
			arr[idx] = -1;
		} else {
			if (arr[idx++] !== -1) c++;
			if (idx > arr.length - 1) idx = 0;
		}
	}

	console.log(`<${result.join(', ')}>`);
};

solution(7, 3);

const solution2 = (n, k) => {
	const arr = Array.from({ length: n }).map((_, i) => i + 1);
	const result = [];
	let c = 0;

	while (arr.length > 0) {
		c = (c + k - 1) % arr.length;
		result.push(arr.splice(c, 1)[0]);
	}

	console.log(`<${result.join(', ')}>`);
};

solution2(7, 3);
