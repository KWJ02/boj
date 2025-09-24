// 문제 : 카드 게임
// 걍 더하기 문제

const solution = (scores) => {
	console.log(scores.reduce((a, c) => a + c, 0));
};

solution([1, 2, 3, 4, 5]);
