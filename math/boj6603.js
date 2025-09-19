// 문제 : 로또
// 숫자 부분 집합 중 선택 가능한 모든 경우의 수
const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`
	.split('\n')
	.map((v) => v.split(' ').slice(1).map(Number));

const solution = (sets) => {
	const nod = [];
	const dfs = (arr, idx) => {
		if (arr.length === 6) {
			nod.push(arr.join(' '));
			return;
		}

		for (let i = idx; i < sets.length; i++) {
			arr.push(sets[i]);
			dfs(arr, i + 1);
			arr.pop();
		}
	};

	dfs([], 0);
	result.push(nod);
};

const result = [];
for (let s of input) {
	if (s.length === 0) break;
	solution(s);
}

console.log(result.map((v) => v.join('\n')).join('\n\n'));
