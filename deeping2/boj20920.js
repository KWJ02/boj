// 문제 : 영단어 암기는 외로워
// 단어의 개수 N개와 외울 단어의 최소 길이 M이 주어질 때, 길이가 M 이상인 단어들을 다음 기준에 따라 정렬
/**
    자주 나오는 단어일수록 앞에 배치한다.
    해당 단어의 길이가 길수록 앞에 배치한다.
    알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다
 */

/** */
const solution = (words, len) => {
	const memo = words.filter((v) => v.length >= len);
	const map = new Map();
	memo.forEach((v) => map.set(v, (map.get(v) ?? 0) + 1));
	const mapping = [...map];
	mapping.sort((a, b) => {
		if (a[1] !== b[1]) {
			return b[1] - a[1];
		} else {
			if (a[0].length !== b[0].length) {
				return b[0].length - a[0].length;
			} else {
				return a[0].localeCompare(b[0]);
			}
		}
	});
	console.log(mapping.map((v) => v[0]).join('\n'));
};

// solution(['apple', 'ant', 'sand', 'apple', 'append', 'sand', 'sand'], 4);
solution(
	['appearance', 'append', 'attendance', 'swim', 'swift', 'swift', 'swift', 'mouse', 'wallet', 'mouse', 'ice', 'age'],
	5
);
