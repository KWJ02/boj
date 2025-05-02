// 문제 : 벌집
// 나선형 모양으로 돌아가는 방 번호가 주어지면, 1번 방부터 떨어져있는 최소거리 구하기

/**
 * 1번 방을 원점으로
 * 원점에 존재하는 방은 1개,
 * 원점을 둘러싸는 방은 6개,
 * 그 방들을 다시 둘러싸는 방은 12개, ...
 * 방을 둘러쌀 때마다 6의 배수로 증가하는 규칙
 * @param {*} room
 */
const solution = (room) => {
	let count = 1;

	while (room > 1) {
		let iter = 6 * count++;
		room -= iter;
	}

	console.log(count);
};

solution(7);
