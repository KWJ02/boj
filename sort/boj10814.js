// 문제 : 나이순 정렬
// '나이 이름'로 매칭된 문자열을 정렬, 나이가 같을 시 먼저 가입한 순서대로 출력

const solution = (users) => {
	console.log(
		users
			.sort((a, b) => {
				if (a[0] === b[0]) {
					return a;
				}

				return a[0] - b[0];
			})
			.map((v) => v.join(' '))
			.join('\n')
	);
};

solution([
	['21', 'j'],
	['21', 'd'],
	['20', 's'],
]);

// 나이가 같으면 들어온 순서대로, 배열의 인덱싱은 들어온 순서 -> 안바꿔도 되는 것이므로 그냥 나이로만 연산해도 됨.
// solution : 464ms -> solution2 : 356ms
const solution2 = (users) => {
	console.log(
		users
			.sort((a, b) => a[0] - b[0])
			.map((v) => v.join(' '))
			.join('\n')
	);
};
