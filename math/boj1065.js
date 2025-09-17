// 문제 : 한수
// 어떤 양의 정수 X가 주어질 때, 1부터 X까지 연속된 자릿수 간의 차이가 모두 같은 수들의 합 출력

const solution = (num) => {
	let count = 0;

	for (let i = 1; i <= num; i++) {
		if (i < 10) {
			count++;
		} else if (i < 100) {
			count++;
		} else {
			const iArr = [...String(i)].map(Number);
			let diff = iArr[0] - iArr[1];
			for (let j = 1; j < iArr.length - 1; j++) {
				if (diff !== iArr[j] - iArr[j + 1]) {
					diff = iArr[j] - iArr[j + 1];
					break;
				}
			}
			if (diff === iArr[0] - iArr[1]) count++;
		}
	}

	console.log(count);
};

solution(1000);
