// 문제 : 계단 오르기
// 한 단계, 두 단계로만 계단을 오를 수 있으며 반드시 마지막 계단을 밟아야하고, 세 번 연속된 계단을 밟지 못할때,
// 최대의 점수를 뽑는 계단을 오르는 문제

/**
 * dp는 상태 정의를 명확하게 하는 것이 좋음.
 * i번째 인덱스에 어떤값이 들어갈지 정해두고,
 * i번째에 도달하기 위한 경우의 수를 잘 생각하는게 좋음
 *
 * 한 단계 오르는 계단을 3번 이상 사용하지 못할 때,
 * i > 2 인 영역에서 i번째 계단을 오르는 경우의 수는,
 * i-2 번째 계단에서 i번째로 2번 바로 오르거나,
 * i-3 번째 계단에서 2칸 오르고, 그다음 1칸 오르는 방식 총 2가지가 있음.
 * i-3 번째 계단에서 1칸 오르고, 그다음 2칸 오르는 방식은
 * i-3 번째 계단까지 오를때 1-4번째에서 1-3번째로 갔을수도 있으므로 불가능한 경우임.
 *
 * 이런식으로 상태 정의 후 경우의 수를 면밀히 따져봐야 함
 */

/** */
const solution = (n, arr) => {
	const dp = Array(n).fill(0);
	if (n > 0) dp[0] = arr[0];
	if (n > 1) dp[1] = arr[0] + arr[1];
	if (n > 2) dp[2] = Math.max(arr[1] + arr[2], arr[0] + arr[2]);

	for (let i = 3; i < arr.length; i++) {
		dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
	}

	console.log(dp[n - 1]);
};

solution(6, [10, 20, 15, 25, 10, 20]);
