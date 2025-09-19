// 문제 : 로프
// k개의 로프를 사용해서 w의 중량을 들 때, 각 로프엔 w/k만큼의 중량이 걸리는데 이 때 n개의 로프로 들어올릴 수 있는 최대 중량 구하기

const solution = (ropes) => {
	ropes.sort((a, b) => b - a);
	let max = -Infinity;

	for (let i = 0; i < ropes.length; i++) {
		const curr = (i + 1) * ropes[i];
		if (curr > max) max = curr;
	}

	console.log(max);
};

solution([10, 15]);
