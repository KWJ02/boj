// 문제 : 분산처리
// 10대 컴퓨터가 있을 때, a번 컴퓨터는 (n % 10) + a 번 데이터 처리를 수행할 때,
// b^c개의 데이터가 들어올 때 마지막 데이터를 처리하는 컴퓨터 번호 출력

const solution = (a, b) => {
	let st = a;
	const set = new Set();

	while (true) {
		const numArr = [...String(st)];
		const lastNum = Number(numArr[numArr.length - 1]);
		if (set.has(lastNum)) break;
		set.add(Number(lastNum));
		st *= a;
	}

	const arr = [...set];

	if (arr.length === 1) {
		console.log(arr[0] === 0 ? 10 : arr[0]);
	} else {
		const mod = b % arr.length;
		if (mod === 0) {
			console.log(arr[arr.length - 1] === 0 ? 10 : arr[arr.length - 1]);
		} else {
			console.log(arr[mod - 1] === 0 ? 10 : arr[mod - 1]);
		}
	}
};

solution(1, 6);
solution(3, 7);
solution(6, 2);
solution(7, 100);
solution(9, 635);
solution(10, 10);
