// 문제 : 수 찾기

const solution = (arr, nums) => {
	const result = [];
	const set = new Set(arr);

	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			result.push(1);
		} else {
			result.push(0);
		}
	}

	console.log(result.join('\n'));
};

solution([4, 1, 5, 2, 3], [1, 3, 7, 9, 5]);
