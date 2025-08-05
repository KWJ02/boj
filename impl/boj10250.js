// 문제 : ACM 호텔
// H, W, N이 주어질때, 1호 층 라인부터 W호 층 라인 순서대로 방을 배정할 때, N번째로 온 손님이 묵을 방 출력

const solution = (h, w, n) => {
	const floor = n % h === 0 ? h : n % h;
	const num = Math.ceil(n / h);
	console.log(floor + String(num).padStart(2, 0));
};

solution(6, 12, 10);
solution(30, 50, 72);
