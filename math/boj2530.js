// 문제 : 인공지능 시계
// 시작시간 + 수행시간 => 종료시간 출력

const solution = (curr, time) => {
	const endTime = curr[0] * 3600 + curr[1] * 60 + curr[2] + time;
	const h = Math.floor(endTime / 3600);
	const m = Math.floor((endTime - h * 3600) / 60);
	const s = endTime - h * 3600 - m * 60;

	console.log(`${h % 24} ${m % 60} ${s}`);
};

solution([23, 59, 59], 500000);
