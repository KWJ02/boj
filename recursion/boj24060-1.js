// 병합 정렬 - 분할 정복 알고리즘
// 더 이상 쪼갤 수 없을때까지 쪼갠후 차례대로 병합

const arr = [4, 5, 1, 3, 2];

const merge = (arr, p, q, r) => {
	const tmp = [];
	let t = 0;
	let i = p; // 전반부 배열 인덱스 범위 (p ~ q)
	let j = q + 1; // 후반부 배열 인덱스 범위 (q + 1 ~ r)

	while (i <= q && j <= r) {
		// 전반, 후반 배열을 인덱스 기준으로 접근해가며 더 작은값을 tmp에 삽입
		if (arr[i] < arr[j]) {
			// 전반부 배열의 값이 후반부 배열보다 작으면, tmp에 삽입하고 전반부 배열의 인덱스 증가
			tmp[t++] = arr[i++];
		} else {
			// 후반부 배열의 값이 전반부 배열보다 작으면, tmp에 삽입하고 후반부 배열의 인덱스 증가
			tmp[t++] = arr[j++];
		}
	}

	// 전반부 배열과 후반부 배열의 길이가 차이날 수 있으므로
	// i와 j가 각각 q, r에 도달하지 않았으면 그만큼을 그대로 tmp에 삽입
	while (i <= q) {
		// i <= p라 해두니 틀리지;
		tmp[t++] = arr[i++];
	}
	while (j <= r) {
		tmp[t++] = arr[j++];
	}

	i = p;
	t = 0;
	while (i <= r) {
		arr[i++] = tmp[t++];
	}
};

const mergeSort = (arr, p, r) => {
	// 계속 쪼개고 쪼갤수 없을때 병합 진행
	if (p < r) {
		const q = Math.floor((p + r) / 2);
		mergeSort(arr, p, q);
		mergeSort(arr, q + 1, r);
		merge(arr, p, q, r);
	}
};

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
