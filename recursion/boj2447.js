// 문제 : 별 찍기 10
// 3의 거듭제곱인 자연수 n이 주어질때, 3보다 큰 n일 경우는 (n/3)x(n/3) 정사각형의 n/3의 패턴으로 둘러쌓여져있음
// ㅈㄴ어렵네 ㅅㅂ;;
const arr = Array.from({ length: 27 }, () => Array(27).fill('*'));

const divide = (x, y, size) => {
	if (size === 1) return;

	const step = size / 3;

	for (let i = x + step; i < x + 2 * step; i++) {
		for (let j = y + step; j < y + 2 * step; j++) {
			arr[i][j] = ' ';
		}
	}

	for (let dx = 0; dx < 3; dx++) {
		for (let dy = 0; dy < 3; dy++) {
			if (dx === 1 && dy === 1) continue;
			divide(x + dx * step, y + dy * step, step);
		}
	}
};

divide(0, 0, 27);
console.log(arr.map((v) => v.join('')).join('\n'));
