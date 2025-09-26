// 문제 : 0 = not cute / 1 = cute
// 다수결

const solution = (votes) => {
	console.log(
		votes.length / 2 > votes.filter((v) => v).length ? 'Junhee is not cute!' : 'Junhee is cute!'
	);
};

solution([1, 0, 0]);
