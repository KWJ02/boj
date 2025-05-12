// 문제 : 커트라인
// 상을 받는 점수 중 최소 점수 출력

const solution = (scores, cut) => {
	console.log(scores.sort((a, b) => b - a)[cut - 1]);
};

solution([100, 76, 85, 93, 98], 2);
