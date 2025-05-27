// 문제 : 병합 정렬 1
// 자연수 k가 주어질 때, k번째로 병합 정렬 내부에서 k번째로 저장되는 숫자 출력
const arr = [4, 5, 1, 3, 2];
const k = 7;
let result = -1;
let c = 0;

const merge = (a, p, q, r) => {
	let [i, j, t] = [p, q + 1, 0];
	const tmp = [];

	while (i <= q && j <= r) {
		if (a[i] < a[j]) {
			tmp[t++] = a[i++];
		} else {
			tmp[t++] = a[j++];
		}
		c++;
		if (c === k) result = tmp[t - 1];
	}

	while (i <= q) {
		tmp[t++] = a[i++];
		c++;
		if (c === k) result = tmp[t - 1];
	}

	while (j <= r) {
		tmp[t++] = a[j++];
		c++;
		if (c === k) result = tmp[t - 1];
	}

	i = p;
	t = 0;
	while (i <= r) {
		a[i++] = tmp[t++];
	}
};

const merge_sort = (a, p, r) => {
	if (p < r) {
		const q = Math.floor((p + r) / 2);
		merge_sort(a, p, q);
		merge_sort(a, q + 1, r);
		merge(a, p, q, r);
	}
};

merge_sort(arr, 0, arr.length - 1);
console.log(arr, result);
