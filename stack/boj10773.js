// 문제 : 제로
// 0이 아닌 수가 들어오면 push, 0이면 pop

// 스택을 이용한 풀이
const solution = (nums) => {
	const stack = [];
	for (let num of nums) {
		if (num === 0) {
			stack.pop();
		} else {
			stack.push(num);
		}
	}

	console.log(stack.reduce((a, c) => a + c, 0));
};

solution([3, 0, 4, 0]);
solution([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]);
