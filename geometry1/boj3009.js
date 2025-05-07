// 문제 : 네 번째 점
// 직사각형을 만들기 위한 네 번째 점의 좌표 출력

const solution = (coor) => {
	const xs = coor.map((v) => v[0]);
	const ys = coor.map((v) => v[1]);

	const mapX = new Map();
	const mapY = new Map();

	xs.forEach((v) => mapX.set(v, (mapX.get(v) ?? 0) + 1));
	ys.forEach((v) => mapY.set(v, (mapY.get(v) ?? 0) + 1));

	let x = null;
	let y = null;

	for (c of mapX) {
		if (c[1] === 1) x = c[0];
	}

	for (c of mapY) {
		if (c[1] === 1) y = c[0];
	}

	console.log(x, y);
};

solution([
	[5, 5],
	[5, 7],
	[7, 5],
]);
