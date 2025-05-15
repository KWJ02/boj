// 문제 : 가로수
// 가로수의 위치가 주어질 때, 균등한 거리로 떨어져 있게 만드는 최소한의 가로수 개수 출력

const solution = (trees) => {
	const dist = trees.map((v, i) => (i > 0 ? v - trees[i - 1] : i)).slice(1);

	let a = dist[0];

	for (let i = 1; i < dist.length; i++) {
		let b = dist[i];

		while (b > 0) {
			[a, b] = [b, a % b];
		}
	}

	console.log(dist.map((v) => (v - a) / a).reduce((a, c) => a + c));
};

solution([1, 3, 7, 13]);
solution([2, 6, 12, 18]);

// 여러 개의 가로수의 위치가 주어졌으니, 모든 위치별 차이에 대한 최대공약수를 구해야함
// 최소와 최댓값에 대한 최대공약수만 구하고 있으니 틀린 답안.
// const badExample = (trees) => {
// 	const dist = trees.map((v, i) => (i > 0 ? v - trees[i - 1] : i)).slice(1);

// 	let a = Math.min(...dist);
// 	let b = Math.max(...dist);

// 	while (b > 0) {
// 		[a, b] = [b, a % b];
// 	}

// 	console.log(dist.map((v) => (v - a) / a).reduce((a, c) => a + c));
// };
