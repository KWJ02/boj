// 문제 : 도키도키 간식 드라마
// 엉켜있는 줄이 1~N의 순서대로 풀리면 Nice, 아니라면 Sad 출력

const solution = (rows) => {
	const pass = [];
	const wait = [];
	let pred = 1;

	for (let i = 0; i < rows.length; i++) {
		if (rows[i] === pred) {
			pass.push(rows[i]);
			pred++;
		} else if (wait.at(-1) === pred) {
			pass.push(wait.pop());
			pred++;
			i--;
		} else {
			wait.push(rows[i]);
		}
	}

	while (wait.length > 0) {
		const num = wait.pop();
		if (pass.at(-1) === num - 1) {
			pass.push(num);
		} else {
			break;
		}
	}

	pass.length === rows.length ? console.log('Nice') : console.log('Sad');
};

solution([5, 4, 1, 3, 2]);
solution([5, 1, 3, 4, 2]);
solution([1, 2, 3, 4, 5, 10, 7, 6, 8, 9]);
solution([1, 2, 3, 4, 5, 10, 7, 6, 9, 8]);
