// 문제 : 기찍 N
// 2741번 문제 반대

const solution = (n) => {
	const arr = Array.from({ length: n })
		.fill(0)
		.map((_, i) => i + 1)
		.reverse();
	console.log(arr.join('\n'));
};

solution(5);
