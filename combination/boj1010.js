// 문제 : 다리 놓기
// 동쪽에 M개의 사이트, 서쪽에 N개의 사이트가 있을 때, 연결할 수 있는 다리의 경우의 수 출력 (N <= M)
// 사이트 간 중복으로 다리를 놓을 순 없음
// permutation으로 접근하는게 아니라 combination으로 접근해야함

const solution = (n, m) => {
	const getCombination = (n, m) => {
		let res = 1;
		for (let i = 1; i <= n; i++) {
			res *= m - i + 1;
			res /= i;
		}
		return res;
	};
	console.log(getCombination(n, m));
};

solution(2, 2);
solution(1, 5);
solution(2, 5);
solution(13, 29);
