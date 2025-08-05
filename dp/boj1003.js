// 문제 : 피보나치 함수
// 정수 n에 대한 피보나치 함수가 실행될때, 0과 1이 등장하는 횟수를 각각 출력

const solution = (num) => {
	const zDp = [1, 0];
	const oDp = [0, 1];

	if (num < 2) {
		console.log(zDp[num], oDp[num]);
		return 0;
	}

	for (let i = 2; i <= num; i++) {
		zDp[i] = zDp[i - 2] + zDp[i - 1];
		oDp[i] = oDp[i - 2] + oDp[i - 1];
	}

	console.log(zDp[num], oDp[num]);
};

solution(22);
