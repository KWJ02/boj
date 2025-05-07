// 문제 : 세 막대
// 길이가 a,b,c인 막대로 최대의 둘레가 되는 삼각형 길이 출력
/**
 * 삼각형의 성립 조건
 * 세 변 a,b,c가 있을 때,
 * a + b > c, b + c > a, a + c > b.
 * 서로 다른 두 변의 길이의 합은 다른 변의 길이보다 무조건 커야함.
 * 문제에서 주어진 삼각형의 변 중 초과되는 변이 있으면, 그 변을 줄이면서 최대길이의 삼각형을 만드려면
 * 다른 두 변의 길이의 합에서 1을 빼는 값으로 변환해야함.
 */

const solution = (sticks) => {
	const arr = sticks.sort((a, b) => a - b);
	let max = arr.pop();

	if (arr[0] + arr[1] <= max) {
		max = arr[0] + arr[1] - 1;
	}

	console.log(arr[0] + arr[1] + max);
};

solution([1, 2, 3]);
solution([2, 2, 2]);
solution([1, 100, 1]);
solution([41, 64, 16]);
