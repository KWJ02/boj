// 문제 : 손익분기점
// 고정비용 a, 가변비용 b, 판매 실가격 c가 주어질 때,
// 수입비용(c * bep)이 제작 비용(a + (b * bep))보다 커지는 분기점 구하기
// while문으로 돌리면 시간 초과 -> 위 계산식을 이용한 방정식 설계

const solution = (a, b, c) => {
	if (b >= c) {
		console.log(-1);
		return;
	}

	console.log(Math.floor(a / (c - b)) + 1);
};

solution(3, 2, 1);
