// 문제 : 연산자 끼워넣기
// 수열이 주어지고, [덧셈, 뺄셈, 곱셈, 나눗셈] (0,1,2,3) 개수의 배열이 주어질때,
// 조합 상 가능한 최대와 최솟값 출력. 수열의 순서는 바꾸면 안됨
// ㅅㅂ;;
// 나눗셈은 C++의 기준으로 수행해야 하기 때문에 Math.floor, ceil, trunc 모두 불가능
// ~~(a/b) 와 같이 비트연산으로 수행해야만 통과 가능
// js에서 0과 -0을 서로 다른 값으로 인식하기 때문에

const solution = (nums, operators) => {
	let min = Infinity;
	let max = -Infinity;

	const dfs = (idx, cur, plus, minus, multi, divide) => {
		if (idx === nums.length) {
			min = Math.min(min, cur);
			max = Math.max(max, cur);
			return;
		}

		if (plus > 0) dfs(idx + 1, cur + nums[idx], plus - 1, minus, multi, divide);
		if (minus > 0) dfs(idx + 1, cur - nums[idx], plus, minus - 1, multi, divide);
		if (multi > 0) dfs(idx + 1, cur * nums[idx], plus, minus, multi - 1, divide);
		if (divide > 0) {
			const current = cur < 0 ? -Math.ceil(cur / nums[idx]) : Math.floor(cur / nums[idx]);
			dfs(idx + 1, current, plus, minus, multi, divide - 1);
		}
	};

	dfs(1, nums[0], operators[0], operators[1], operators[2], operators[3]);

	console.log(max);
	console.log(min);
};

solution([1, 2, 3, 4, 5, 6], [2, 1, 1, 1]);
