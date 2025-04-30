// 문제 : 단어공부
// 입력 문자열 중 가장 많이 입력된 문자를 대문자로 출력, 최댓값이 복수 개일 경우 ? 출력

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = (word) => {
	const arr = [...word.toUpperCase()];
	const map = new Map();

	for (w of arr) {
		map.set(w, (map.get(w) ?? 0) + 1);
	}

	let max = 0;
	let maxWord = '';

	for (const [w, c] of map) {
		console.log(w, c);
		if (c > max) {
			max = c;
			maxWord = w;
		} else if (c === max) {
			maxWord = '?';
		}
	}

	return maxWord;
};

console.log(solution(input));
