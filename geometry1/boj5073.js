// 문제 : 삼각형과 세 변
// 삼각형 세 변의 길이로 서로 다른 심볼 출력

const solution = (len) => {
	const edge = len
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);

	if (edge[0] + edge[1] <= edge[2]) return 'Invalid';

	const set = new Set(edge);
	if (set.size === 1) {
		return 'Equilateral';
	}

	if (set.size === 2) {
		return 'Isosceles';
	}

	return 'Scalene';
};

console.log(solution('7 7 7'));
console.log(solution('6 5 4'));
console.log(solution('3 2 5'));
console.log(solution('6 2 6'));
