// 문제 : 파티가 끝나고 난 뒤

const solution = (l, p, r) => {
	console.log(r.map((v) => v - l * p).join(' '));
};

solution(5, 20, [99, 101, 1000, 0, 97]);
