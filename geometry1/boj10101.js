// 문제 : 삼각형 외우기
// 각도에 따라 다른 심볼 출력

const solution = (angles) => {
	// 세 각의 합이 180이 아닐 때
	if (angles.reduce((a, c) => a + c, 0) !== 180) return 'Error';

	const set = new Set(angles);

	// 각이 모두 같을 때
	if (set.size === 1) return 'Equilateral';

	// 두 개의 각만 같을 때
	if (set.size === 2) return 'Isosceles';

	// 각이 모두 다를 때
	return 'Scalene';
};

console.log(solution([40, 40, 2]));
