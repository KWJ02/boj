// 문제 : 팩토리얼 0의 개수
// N!를 계산한 후 뒤에서부터 0이 아닌 숫자가 나올때까지의 0의 개수 구하기
// dp로 시간 단축

const solution = (n) => {
	// 0!는 1;;
	const dp = [1, 1, 2, 6];

	if (n < 4) {
		if (n === 0) {
			console.log(0);
			return;
		}
		console.log(0);
		return;
	}

	for (let i = 4; i <= n; i++) {
		dp[i] = BigInt(dp[i - 1]) * BigInt(i);
	}

	const numStrArr = [...String(dp[n])];
	let zeros = 0;
	let startIdx = numStrArr.length - 1;

	while (numStrArr[startIdx] === '0') {
		zeros += 1;
		startIdx -= 1;
	}

	console.log(zeros);
};

solution(20);
