// 문제 : X보다 작은 수

const solution = (arr, x) => {
	console.log(arr.filter((v) => v < x).join(' '));
};

solution([1, 10, 4, 9, 2, 3, 8, 5, 7, 6], 5);
