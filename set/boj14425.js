// 문제 : 문자열 집합
// N과 M이 주어질 때, N만큼을 set에, M만큼을 set과 비교 후 존재하는 단어만큼 개수 출력

const solution = (sets, test) => {
	const set = new Set(sets);
	let count = 0;
	test.forEach((v) => {
		if (set.has(v)) count++;
	});

	console.log(count);
};

solution(
	['baekjoononlinejudge', 'startlink', 'codeplus', 'sundaycoding', 'codingsh'],
	[
		'baekjoon',
		'codeplus',
		'codeminus',
		'startlink',
		'starlink',
		'sundaycoding',
		'codingsh',
		'codinghs',
		'sondaycoding',
		'startrink',
		'icerink',
	]
);
