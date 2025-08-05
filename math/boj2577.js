// 문제 : 숫자의 개수
// A, B, C가 주어질 때 A x B x C의 결괏값에서 0부터 9까지의 숫자가 몇번씩 쓰였는지 출력

const solution = (a, b, c) => {
	const nums = Array.from({ length: 10 }).fill(0);
	const result = String(a * b * c);

	for (let i = 0; i < result.length; i++) {
		nums[Number(result[i])] += 1;
	}

	console.log(nums.join('\n'));
};

solution(150, 266, 427);
