// 문제 : 오늘 날짜

const solution = () => {
	const date = new Date();
	console.log(
		`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
			date.getDate()
		).padStart(2, '0')}`
	);
};

solution();
