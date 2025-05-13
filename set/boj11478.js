// 문제 : 서로 다른 부분 문자열의 개수
// ababc => a, b, a, b, c, ab, ba, ab, bc, aba, bab, abc, abab, babc, ababc

const solution = (str) => {
	const part = new Set();

	for (let i = 1; i <= str.length; i++) {
		for (j = 0; j <= str.length - i; j++) {
			part.add(str.substring(j, j + i));
		}
	}

	console.log(part.size);
};

solution('ababc');

// 부분 문자열을 만들때 substring이 아닌
// 문자열을 배열로 바꾸고, i 크기에 맞춰 슬라이싱하는 작업이 매우 많은 시간을 소모, 시간 초과 발생
// const timeout = (str) => {
// 	const words = [...str];
// 	const part = new Set();

// 	for (let i = 1; i <= words.length; i++) {
// 		for (j = 0; j <= words.length - i; j++) {
// 			part.add(words.slice(j, j + i).join(''));
// 		}
// 	}

// 	console.log(part.size);
// };
