// 문제 : 상근날드
// 햄버거 음료 세트 가격 중 최솟값 출력

const solution = (h, d) => {
	let min = Infinity;

	for (let i = 0; i < h.length; i++) {
		for (let j = 0; j < d.length; j++) {
			const curr = h[i] + d[j] - 50;
			if (curr < min) min = curr;
		}
	}

	console.log(min);
};

solution([1999, 100, 189], [189, 100]);
