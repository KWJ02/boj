// 문제 : 수 정렬하기 3
// 수 정렬하기 2번 보다 크기가 10배 늘어남
// 언어 제한, js는 없고 ts로는 풀기가 사실상 불가능한 문제

// >> 메모리 초과
// const solution = (arr) => {
// 	console.log(arr.sort((a, b) => a - b).join('\n'));
// };

// 이 코드 파이썬으로 변환 후 제출 성공
const solution = (arr) => {
	// const array = Array.from({ length: 10001 }).fill(0);
	const array = Array.from({ length: 10001 }, () => 0);

	for (let i = 0; i < arr.length; i++) {
		array[arr[i]] += 1;
	}

	let result = '';
	for (let i = 1; i <= 10000; i++) {
		if (array[i] > 0) {
			result += (i + '\n').repeat(array[i]);
		}
	}

	console.log(result.trim());
};

solution([7, 5, 3, 4, 3, 2, 2, 1, 5, 1]);
