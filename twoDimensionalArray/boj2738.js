// 문제 : 행렬 덧셈

const solution = (matrix1, matrix2) => {
	const result = Array.from(matrix1).map((v) => Array.from(v).fill(0));

	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result[i].length; j++) {
			result[i][j] = matrix1[i][j] + matrix2[i][j];
		}
	}

	for (let i = 0; i < result.length; i++) {
		console.log(result[i].join(' '));
	}
};

solution(
	[
		[1, 1, 1],
		[2, 2, 2],
		[0, 1, 0],
	],
	[
		[3, 3, 3],
		[4, 4, 4],
		[5, 5, 100],
	]
);
