// 문제 : 나누기
// 정수 N, F가 주어질 때, N의 가장 뒷자리 두개를 바꿔서 F에 나누어 떨어지게 변경

const solution = (n, f) => {
	const arr = (n + '').split('').map(Number);
	arr[arr.length - 1] = 0;
	arr[arr.length - 2] = 0;

	let fix = Number(arr.join(''));

	while (fix % f !== 0) {
		fix++;
	}

	const ftos = fix + '';
	console.log(
		ftos
			.split('')
			.slice(ftos.length - 2)
			.join('')
	);
};

solution(32442, 99);
