// 문제 : 수학은 체육과목입니다.
// 1~n개로 쌓인, 변의 길이가 1인 사각형의 외곽선 총 길이

const solution = (st) => {
	// 가로 총 길이
	const width = st * 4 - (st - 1) * 2;

	// 세로 총 길이
	const height = (st - 1) * 2;

	console.log(width + height);
};

solution(1);
solution(2);
solution(3);
solution(4);
