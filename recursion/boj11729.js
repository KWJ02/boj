// 하노이의 탑 이동 순서

const moves = [];

const hanoi = (n, a, to, b) => {
	if (n === 1) {
		moves.push(`${a} ${to}`);
		return;
	}

	hanoi(n - 1, a, b, to);
	moves.push(`${a} ${to}`);
	hanoi(n - 1, b, to, a);
};

hanoi(3, 1, 3, 2);
console.log(moves);
