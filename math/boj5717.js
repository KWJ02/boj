// 문제 : 상근이의 친구들
// M, F 쌍 개수 구하기

const solution = (friends) => {
	for (let f of friends) {
		console.log(f[0] + f[1]);
	}
};

solution([
	[2, 2],
	[2, 3],
	[5, 5],
	[1, 1],
]);
