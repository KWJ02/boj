// 문제 : 대칭 차집합
// 집합 A, B가 있을 때, A-B와 B-A의 원소 개수 출력
// (A-B)+(B-A) = (A^B)-(AvB) => 합집합에서 교집합을 뺀 결과

const solution = (A, B) => {
	const setA = new Set(A);
	const setB = new Set(B);
	const sum = [...A, ...B];
	let inter = 0;

	for (let i = 0; i < sum.length; i++) {
		if (setA.has(sum[i]) && setB.has(sum[i])) inter++;
	}

	console.log(sum.length - inter);
};

solution([1, 2, 4], [2, 3, 4, 5, 6]);
