// 문제 : 회사에 있는 사람
// enter => 추가, leave => 삭제, enter만 하고 leave하지 않은 사람 이름을 사전의 역순으로 출력

// 사전 정렬할때 localeCompare 쓴다고 깝치지말고 -> 괜히 9번을 틀리지
// 그냥 sort로 얌전히 정렬
const solution = (list) => {
	const set = new Set();

	list.forEach((v) => {
		const [name, behavior] = v.split(' ');

		if (behavior === 'enter') {
			set.add(name);
		} else {
			set.delete(name);
		}
	});

	console.log([...set].sort().reverse().join('\n'));
};

solution(['Baha enter', 'Askar enter', 'Baha leave', 'Artem enter']);
