// 문제 : 블랙잭
// 카드의 합이 21을 넘지 않는 한에서 카드의 합을 가장 크게 만드는 게임

// 일반 조합 풀이
// const solution = (arr, max) => {
// 	let m = 0;

// 	for (let i = 0; i < arr.length - 2; i++) {
// 		for (let j = i + 1; j < arr.length - 1; j++) {
// 			for (let k = j + 1; k < arr.length; k++) {
// 				if (arr[i] + arr[j] + arr[k] > m && arr[i] + arr[j] + arr[k] <= max) {
// 					m = arr[i] + arr[j] + arr[k];
// 				}
// 			}
// 		}
// 	}

// 	console.log(m);
// };

// solution([5, 6, 7, 8, 9], 21);

// dfs 풀이
const solution = (max) => {
	const arr = [93, 181, 245, 214, 315, 36, 185, 138, 216, 295];
	let m = 0;

	const dfs = (sum, c, idx) => {
		if (sum > max) return;
		if (c === 3) {
			if (sum > m) m = sum;
			return;
		}

		for (let i = idx; i < arr.length; i++) {
			dfs(sum + arr[i], c + 1, i + 1);
		}
	};

	dfs(0, 0, 0);

	console.log(m);
};

solution(500);
