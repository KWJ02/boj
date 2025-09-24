// 문제 : 과자

const solution = (s, c, f) => {
	if (f >= s * c) {
		console.log(0);
	} else {
		console.log(s * c - f);
	}
};

solution(300, 4, 1000);
