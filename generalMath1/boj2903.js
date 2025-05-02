// 문제 : 중앙 이동 알고리즘
// 사각형 중복되지 않은 점의 개수 구하기

/**
 * 단계(phase)가 늘어날수록
 * 한 변의 사각형 개수는 2의 지수꼴로 늘어남.
 * 붙어있는 사각형들의 꼭짓점들 중 중복을 제거한 꼭짓점들의 개수는
 * 가장 상단의 수평선에 존재하는 꼭짓점들로부터 가장 하단의 수평선에 존재하는 꼭짓점들을 덧셈
 * @param {*} phase
 */
const solution = (phase) => {
	const sideSquare = Math.pow(2, phase); // 한 변에 존재하는 사각형의 개수
	const sideDots = sideSquare + 1; // 그 변에 존재하는 중복되지 않은 꼭짓점의 개수

	console.log(Math.pow(sideDots, 2)); // 중복되지 않은 전체 꼭짓점의 개수는 가로x세로
};

solution(5);
