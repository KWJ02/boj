// 문제 : 숫자 카드
// 2번째 줄 : 손에 들고 있는 카드, 4번째 줄 : 카드 나열
// 나열된 카드 중 손에 들고 있는 카드와 같은 숫자이면 1, 아니면 0 출력

const solution = (mine, list) => {
	const set = new Set(mine);
	return list.map((v) => (set.has(v) ? 1 : 0)).join(' ');
};

console.log(solution(['6', '3', '2', '10', '-10'], ['10', '9', '-5', '2', '3', '4', '5', '-10']));
