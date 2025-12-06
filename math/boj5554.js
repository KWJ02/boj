// 문제 : 심부름 가는 길
// 초 단위 시간을 m, s로 분할

const input = `20
20
20
0`;

const solution = (times) => {
	const all = times.reduce((a, c) => a + c, 0);
	const m = Math.floor(all / 60);
	console.log(m);
	console.log(all - 60 * m);
};

solution(input.split('\n').map(Number));
