// 문제 : 음계

const solution = (scales) => {
	const asc = '12345678';
	const desc = '87654321';
	const join = scales.join('');

	if (join === asc) {
		console.log('ascending');
	} else if (join === desc) {
		console.log('descending');
	} else {
		console.log('mixed');
	}
};

solution([8, 7, 6, 5, 4, 3, 2, 1]);
