// 문제 : 숫자 카드2
// 숫자 카드 문제와 비슷, N과 M만큼의 카드 나열, M에서의 카드를 N에서의 카드 갯수로 매핑

const solution = (mine, list) => {
	const map = new Map();
	for (let i = 0; i < mine.length; i++) {
		map.set(mine[i], (map.get(mine[i]) ?? 0) + 1);
	}

	console.log(list.map((v) => map.get(v) ?? 0).join(' '));
};

solution(['6', '3', '2', '10', '10', '10', '-10', '-10', '7', '3'], ['10', '9', '-5', '2', '3', '4', '5', '-10']);
