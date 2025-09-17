// 문제 : 보물

const input = `9
5 15 100 31 39 0 0 3 26
11 12 13 2 3 4 5 9 1`
	.toString()
	.trim()
	.split('\n')
	.slice(1)
	.map((v) => v.split(' ').map(Number));

console.log(input);

// b.indexOf(max) => 타겟 인덱스 중복 이슈때문에 틀림
const solution2 = (a, b) => {
	let sum = 0;
	const adj = [];
	const mat = Array.from({ length: b.length }).fill(-1);

	while (a.length > 0) {
		const max = Math.max(...a);
		a.splice(a.indexOf(max), 1);

		adj.push(max);
	}

	let matIdx = 0;
	while (matIdx < b.length) {
		let max = -Infinity;

		for (let i = 0; i < b.length; i++) {
			if (b[i] > max && mat[i] === -1) {
				max = b[i];
			}
		}

		for (let i = 0; i < b.length; i++) {
			if (b[i] !== max || mat[i] !== -1) continue;
			// mat[b.indexOf(max)] = adj.pop()로 접근해버리면 [3,1,3] 같은 경우 계속해서 0번 인덱스에 접근하는 문제
			mat[i] = adj.pop();
			break;
		}

		matIdx++;
	}

	for (let i = 0; i < b.length; i++) {
		sum += mat[i] * b[i];
	}

	console.log(sum);
};

const solution = (a, b) => {
	let result = 0;

	a.sort((a, b) => a - b);
	b.sort((a, b) => b - a);

	for (let i = 0; i < b.length; i++) {
		result += a[i] * b[i];
	}

	console.log(result);
};

solution2(input[0], input[1]);
