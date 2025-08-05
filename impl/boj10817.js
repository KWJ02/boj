// 문제 : 세 수
// 두 번째로 큰 수 출력

const solution = (tri) => {
	console.log(tri.sort((a, b) => a - b)[1]);
};

solution([2, 4, 1]);
