// 문제 : 영수증
// 토탈 책 가격(10개)이 주어지고 9개의 가격만 주어졌을 때 1개의 가격 구하기

const input = `9850
1050
800
420
380
600
820
2400
1800
980`
	.split('\n')
	.map(Number);

const solution = (t, books) => {
	console.log(t - books.reduce((a, c) => a + c, 0));
};

solution(Number(input.shift()), input);
