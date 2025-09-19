// 문제 : 암호 만들기
// 백트래킹 -> 기저조건으로 문제 조건에 맞는 문자열만 푸쉬하도록 결정

const input = `4 6
a t c i s w`;
const len = Number(input[0][0]);
const alphabet = input[1].split(' ');

const solution = (len, alp) => {
	alp.sort();
	const gather = new Set(['a', 'e', 'i', 'o', 'u']);
	const nod = [];
	const dfs = (arr, idx) => {
		if (arr.length === len) {
			const g = arr.filter((v) => gather.has(v)).length;
			const c = arr.length - g;

			if (g > 0 && c > 1) nod.push(arr.join(''));
			return;
		}

		for (let i = idx; i < alp.length; i++) {
			arr.push(alp[i]);
			dfs(arr, i + 1);
			arr.pop();
		}
	};

	dfs([], 0);
	console.log(nod.join('\n'));
};

solution(4, ['a', 't', 'c', 'i', 's', 'w']);
