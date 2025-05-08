// 문제 : 알고리즘 수업 - 점근적 표기 1
// fn, gn, c, n0이 주어질때, n >= n0인 모든 n에 대하여 fn <= c * gn이 만족하면 1을, 그렇지 않으면 0 출력.

const solution = (O) => {
	const f = O[0].split(' ').map(Number);
	const c = Number(O[1]);
	const n = Number(O[2]);

	for (let i = n; i <= 100; i++) {
		if (f[0] * i + f[1] > i * c) {
			console.log(0);
			return;
		}
	}
	console.log(1);
};

solution(['7 7', '8', '1']);
