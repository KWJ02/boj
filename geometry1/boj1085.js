// 문제 : 직사각형에서 탈출

const solution = (coor) => {
	const [curX, curY, w, h] = coor.split(' ');
	console.log(Math.min(w - curX, h - curY, curX - 0, curY - 0));
};

solution('6 2 10 3');
solution('1 1 5 5');
solution('653 375 1000 1000');
solution('161 181 762 375');
