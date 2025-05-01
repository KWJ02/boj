// 문제 : 문자열 세로읽기
/**
[
  ['A', 'B', 'C', 'D', 'E'],
  ['a', 'b', 'c', 'd', 'e'],
  ['0', '1', '2', '3', '4'],
  ['F', 'G', 'H', 'I', 'J'],
  ['f', 'g', 'h', 'i', 'j']
]

[
	['A', 'A', 'B', 'C', 'D', 'D'],
	['a', 'f', 'z', 'z'],
	['0', '9', '1', '2', '1'],
	['a', '8', 'E', 'W', 'g', '6'],
	['P', '5', 'h', '3', 'k', 'x'],
]
 */

const solution = (str) => {
	let result = '';
	let maxLength = 0;

	for (row of str) {
		if (row.length > maxLength) {
			maxLength = row.length;
		}
	}

	for (let c = 0; c < maxLength; c++) {
		for (let r = 0; r < str.length; r++) {
			if (str[r][c] === undefined) continue;
			result += str[r][c];
		}
	}

	console.log(result);
};

solution([
	['A', 'A', 'B', 'C', 'D', 'D'],
	['a', 'f', 'z', 'z'],
	['0', '9', '1', '2', '1'],
	['a', '8', 'E', 'W', 'g', '6'],
	['P', '5', 'h', '3', 'k', 'x'],
]);
