// 문제 : 카드 2
// 1234 순으로 카드가 쌓여있을때(1이 위, 4가 아래), 맨 위 카드를 지우고, 그 다음 카드를 맨 아래로 까는 것을 반복
// 카드가 1장 남을때까지 반복 후, 남은 1장의 카드 번호를 출력

const solution = (num) => {
	const card = Array(num)
		.fill(0)
		.map((_, i) => i + 1);
	let idx = 0;
	const lastIdx = card.length - 1;

	while (idx < card.length - 1) {
		idx++;
		card.push(card[idx]);
		idx++;
	}

	console.log(card[idx]);
};

solution(6);
