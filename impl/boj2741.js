// 문제 : N 찍기
// n이 주어지면, 1부터 n까지 \n 간격으로 출력

const solution = (n) => {
	const arr = Array.from({ length: n })
		.fill(0)
		.map((_, i) => i + 1);
	console.log(arr.join('\n'));
};

solution(5);
