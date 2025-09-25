// 문제 : 어린왕자
// 출발 - 도착 좌표로 이동할 때 통과해야하는 행성계의 개수
// 각각의 원의 좌표를 이용해 부등식으로 판단하면 될듯
// 출발 - 도착 좌표가 하나의 원에 대해 하나는 안에 있고, 하나는 밖에 있어야 경계선 통과임.
// 원의 부등식이 0보다 작더라도 두 좌표가 모두 안에 있으면, 경계선을 통과하지 않아도 도착할 수 있기 때문

const input = `3
-5 1 5 1
3
0 0 2
-6 1 2
6 2 2
2 3 13 2
8
-3 -1 1
2 2 3
2 3 1
0 1 7
-4 5 1
12 1 1
12 1 2
12 1 3
102 16 19 -108
12
-107 175 135
-38 -115 42
140 23 70
148 -2 39
-198 -49 89
172 -151 39
-179 -52 43
148 42 150
176 0 10
153 68 120
-56 109 16
-187 -174 8`
	.toString()
	.trim()
	.split('\n');
let idx = 1;

const solution = (posCoors, planetCoors) => {
	const [sx, sy, ax, ay] = posCoors;
	let cnt = 0;

	const isIn = (a, b, x, y, r) => {
		const result = Math.pow(a - x, 2) + Math.pow(b - y, 2) - r ** 2;
		return result >= 0 ? false : true;
	};

	for (let i = 0; i < planetCoors.length; i++) {
		const [px, py, r] = planetCoors[i];
		if (isIn(sx, sy, px, py, r) !== isIn(ax, ay, px, py, r)) cnt++; // 핵심 로직
	}

	console.log(cnt);
};

while (idx < input.length) {
	const coors = input[idx++].split(' ').map(Number);
	const planets = Number(input[idx++]);
	const planetArr = [];

	for (let i = 0; i < planets; i++) {
		planetArr.push(input[idx++].split(' ').map(Number));
	}

	solution(coors, planetArr);
}
