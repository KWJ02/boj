// 문제 : 전자레인지
// 주어진 초를 시간 조절용 버튼 a,b,c를 최소횟수로 맞출 수 있는 횟수 출력

const solution = (t) => {
	if (t % 10 !== 0) {
		console.log(-1);
		return;
	}

	const [a, b, c] = [300, 60, 10];
	let remain = t;
	let aCnt = 0;
	let bCnt = 0;
	let cCnt = 0;

	while (remain >= a) {
		remain -= a;
		aCnt++;
	}

	while (remain >= b) {
		remain -= b;
		bCnt++;
	}

	while (remain >= c) {
		remain -= c;
		cCnt++;
	}

	console.log(`${aCnt} ${bCnt} ${cCnt}`);
};

solution(300);
