// 문제 : 평균은 넘겠지

const input = [
	[5, 50, 50, 70, 80, 100],
	[7, 100, 95, 90, 80, 70, 60, 50],
	[3, 70, 90, 80],
	[3, 70, 90, 81],
	[9, 100, 99, 98, 97, 96, 95, 94, 93, 91],
];

const solution = (scores) => {
	const len = scores.shift();
	const sum = scores.reduce((a, c) => a + c, 0);

	console.log(((scores.filter((v) => v > sum / len).length / len) * 100).toFixed(3) + '%');
};

for (let i of input) {
	solution(i);
}
