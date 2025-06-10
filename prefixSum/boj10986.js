// 문제 : 나머지 합
// 수열이 주어질 때, 연속된 부분 구간의 합이 M과 나누어 떨어지는 쌍의 개수 출력
// 구간합을 M으로 나누고, 같은 나머지를 갖는 인덱스 개수의 조합을 모두 더한 결과가 정답
/**
 * [1,2,3,1,2]의 구간 합 -> [0,1,3,6,7,9] 를 m(3)으로 나눈 값 -> [0,1,0,0,1,0] (구간 0도 포함)
 * 모듈러 연산을 통해 얻은 배열에서, 0의 개수는 4개, 1의 개수는 2개.
 * 0을 갖는 인덱스는 (0,2,3,5)
 * 1을 갖는 인덱스는 (1,4)
 *
 * 구간 합 배열([0,1,3,6,7,9])에서 2번째 - 0번째, 3번째 - 2번째, 5번째 - 3번째, 5번째 - 2번째
 * 같은 수를 갖는 인덱스끼리의 모든 조합은 결국 m의 배수가 되는거임
 */

/** */
const solution = (arr, m) => {
	const prefix = Array.from({ length: arr.length + 1 }).fill(0);
	const count = Array.from({ length: m }).fill(0);
	let sum = 0;

	for (let i = 1; i <= arr.length; i++) {
		prefix[i] = (prefix[i - 1] + arr[i - 1]) % m;
	}

	for (num of prefix) {
		count[num]++;
	}

	for (c of count) {
		sum += (c * (c - 1)) / 2;
	}

	console.log(sum);
};

solution([1, 2, 3, 1, 2], 3);
