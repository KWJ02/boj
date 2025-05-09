// 문제 : 영화감독 숌
// 시리즈 영화의 제목을 n번째 단계 영화라면 (n-1)666으로 표현할때, n번째 단계의 제목에 들어갈 수 출력
// 666 - 1666 - 2666 - 3666 - 4666 - 5666 - 6660 - 6661 - 6662 - 6663 - 6664 -6665 - 6666 - 16666 .. 이런식인듯?

const solution = (n) => {
	let series = 0;
	let i = 666;

	while (true) {
		if (series > 10000) break;
		if (i.toString().includes('666')) {
			series++;
		}

		if (series === n) {
			return i;
		}

		i++;
	}
};

console.log(solution(1));
