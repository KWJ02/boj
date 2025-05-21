// 문제 : 통계학
// 홀수 개인 N개의 수가 주어지면, 각 줄 별로 산술평균, 중앙값, 최반값, 범위를 출력
/**
    산술평균 : N개의 수들의 합을 N으로 나눈 값
    중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
    최빈값 : N개의 수들 중 가장 많이 나타나는 값
    범위 : N개의 수들 중 최댓값과 최솟값의 차이
 */

/** */
const solution = (arr) => {
	result = [];
	arr.sort((a, b) => a - b);
	result.push(Math.round(arr.reduce((a, c) => a + c, 0) / arr.length));
	result.push(arr[Math.floor(arr.length / 2)]);

	const map = new Map();
	arr.forEach((v) => map.set(v, (map.get(v) ?? 0) + 1));
	const max = Math.max(...map.values());
	const most = [];

	for (let [k, v] of map) {
		if (v === max) most.push(k);
	}

	if (most.length === 1) {
		result.push(most[0]);
	} else {
		result.push(most[1]);
	}
	result.push(arr[arr.length - 1] - arr[0]);

	console.log(result.join('\n'));
};

solution([-1, -2, -3, -1, -2]);
