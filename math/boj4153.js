// 문제 : 직각삼각형

const input = [
	[6, 8, 10],
	[25, 52, 60],
	[5, 12, 13],
	[0, 0, 0],
];

input.pop();

const solution = (arr) => {
	const max = Math.max(...arr);
	arr.splice(arr.indexOf(max), 1);

	if (max ** 2 === arr.reduce((a, c) => a + c ** 2, 0)) {
		console.log('right');
	} else {
		console.log('wrong');
	}
};

for (let i of input) {
	solution(i);
}
