// 문제 : 검증 수

const solution = (arr) => {
	console.log(arr.reduce((a, c) => a + c ** 2, 0) % 10);
};

solution([0, 4, 2, 5, 6]);
