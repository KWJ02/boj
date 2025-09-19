// 문제 : 초콜릿 자르기
// N x M 크기의 초콜릿이 있을때, N * M 개가 될 때 까지 초콜릿을 나눌 최소 횟수

const solution = (n, m) => {
	const count = [1];
	let iter = 0;

	while (count.length !== n * m) {
		// 초콜릿을 한번 쪼개면 두 조각 생성
		count.pop();
		count.push(1);
		count.push(1);
		iter++;
	}

	console.log(iter);
};

solution(2, 3);
