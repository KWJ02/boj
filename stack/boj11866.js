// 문제 : 요세푸스 문제 0
// n과 k가 주어질 때, 1부터 n까지의 사람이 원형으로 앉아있고, k번째의 사람을 제거,
// 모든 사람이 제거될때까지 제거된 순서 => 요세푸스 순열

// splice를 이용하지 않고, 인덱스 포인터를 이용한 풀이
const solution = (num) => {
	const [n, k] = num.split(' ').map(Number);
	const per = Array(n + 1).fill(true);
	const el = []; // 제거된 순서 배열
	let idx = 1;
	let count = 1;

	while (el.length < n) {
		if (count < k) {
			if (per[idx]) {
				count++;
				idx++;
			} else {
				idx++;
			}

			if (idx > n) idx = 1;
		} else {
			if (per[idx]) {
				per[idx] = false;
				el.push(idx);
				count = 1;
			} else {
				idx++;
				if (idx > n) idx = 1;
			}
		}
	}

	console.log(`<${el.join(', ')}>`);
};

solution('7 3');

// splice를 이용한 풀이. splice때문에 시간 오래걸릴줄 알았는데 이게 더 짧음;; 160ms -> 92ms
const solution2 = (num) => {
	const [n, k] = num.split(' ').map(Number);
	// const per = Array(n).fill(0).map((_, i) => i + 1); // -> 이거보다 더 효율적으로 만들 수 있음
	const per = Array.from({ length: n }, (_, i) => i + 1); // fill -> map이 아닌 from에서 길이 정의 후 함수로 생성 가능
	const el = [];
	let count = 0;

	while (per.length > 0) {
		count += k - 1;
		count %= per.length;
		el.push(...per.splice(count, 1));
	}

	console.log(`<${el.join(', ')}>`);
};

solution2('7 3');
