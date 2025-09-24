// 문제 : 날짜 계산
// 지구, 태양, 달의 서로 다른 연도가 주어질때, 1 1 1을 1년으로 가정하여
// 입력된 연도가 몇년도인지 구하는 문제

// js로 통과 불가능 -> 파이썬으로 대체
/**
 * 
 * 
 * 
	years = list(map(int, input().split()))

	def solution(years):
		e, s, m = years
		start = [1,1,1]
		cnt = 1
		
		while True:
			if start[0] == e and start[1] == s and start[2] == m:
				break
			
			cnt += 1
			start[0] = (start[0] % 15) + 1
			start[1] = (start[1] % 28) + 1
			start[2] = (start[2] % 19) + 1
		
		print(cnt)

	solution(years)
 */

const solution = (years) => {
	const [e, s, m] = years;
	const start = [1, 1, 1];
	let cnt = 1;

	while (true) {
		if (start[0] === e && start[1] === s && start[2] === m) break;

		cnt++;
		start[0] = (start[0] % 15) + 1;
		start[1] = (start[1] % 28) + 1;
		start[2] = (start[2] % 19) + 1;
	}

	console.log(cnt);
};

solution([15, 28, 19]);
