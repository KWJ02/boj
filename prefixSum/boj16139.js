// 문제 : 인간 - 컴퓨터 상호작용
// 문자열 s와 문자 a, 구간 [r,l]이 주어질때
// 문자열 s의 r번부터 l번까지 a가 얼마나 나오는지 출력

const solution = (str, chrs) => {
	const prefix = {};
	const count = [];

	for (let i = 0; i < 26; i++) {
		prefix[String.fromCharCode(97 + i)] = Array.from({ length: str.length }).fill(0);
	}

	for (let i = 0; i < str.length; i++) {
		const chr = str[i];
		for (let j = 0; j < 26; j++) {
			const cur = String.fromCharCode(97 + j);
			if (i === 0) {
				prefix[cur][i] = cur === chr ? 1 : 0;
			} else {
				prefix[cur][i] = prefix[cur][i - 1] + (cur === chr ? 1 : 0);
			}
		}
	}

	for (let i = 0; i < chrs.length; i++) {
		const [chr, st, en] = chrs[i];
		if (Number(st) === 0) {
			count.push(prefix[chr][Number(en)]);
		} else {
			count.push(prefix[chr][Number(en)] - prefix[chr][Number(st) - 1]);
		}
	}

	console.log(count.join('\n'));
};

solution('seungjaehwang', [
	['a', '0', '5'],
	['a', '0', '6'],
	['a', '6', '10'],
	['a', '7', '10'],
]);
