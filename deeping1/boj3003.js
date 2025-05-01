/**
 * 정상 체스 말 개수 : [1,1,2,2,2,8] -> 킹, 퀸, 룩, 비숍, 나이트, 폰
 */

// const solution = (chess) => {
// 	const reg = [1, 1, 2, 2, 2, 8];
// 	const diff = Array(reg).fill(0);
// 	const arr = chess.split(' ');

// 	for (let i = 0; i < arr.length; i++) {
// 		diff[i] = reg[i] - arr[i];
// 	}

// 	return diff;
// };

const solution = (chess) => {
	const reg = [1, 1, 2, 2, 2, 8];
	const arr = chess.split(' ');

	return arr.map((v, i) => reg[i] - v);
};

console.log(solution('0 1 2 2 2 7'));
console.log(solution('2 1 2 1 2 1'));
