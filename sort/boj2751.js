// 문제 : 수 정렬하기 2
// 수 정렬하기와 똑같은 문제, 크기가 1000배 늘어남

const solution = (arr) => {
	return arr.sort((a, b) => a - b).join('\n');
};

console.log(solution([5, 4, 3, 2, 1]));
