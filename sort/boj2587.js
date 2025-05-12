// 문제 : 대표값2
// 주어진 다섯 개의 자연수가 있을 때, 평균과 중앙값 출력

const solution = (arr) => {
	console.log(arr.reduce((a, c) => a + c) / 5);
	console.log(arr.sort((a, b) => a - b)[2]);
};

solution([10, 40, 30, 60, 30]);
