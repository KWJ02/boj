// 문제 : 대지
// 주어진 좌표로 최소한의 직사각형 너비 출력
input = ['2 1', '3 2', '5 2', '3 4'];
input = input.map((v) => v.split(' '));

const solution = (coor) => {
	const xs = coor.map((v) => Number(v[0]));
	const ys = coor.map((v) => Number(v[1]));

	console.log((Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys)));
};

solution(input);
