// 문제 : 단어 정렬
// 단어의 길이 순으로 정렬, 같으면 사전순

// const solution = (words) => {
// 	console.log(
// 		[
// 			...new Set(
// 				words.sort((a, b) => {
// 					if (a.length === b.length) {
// 						return a.localeCompare(b);
// 					}

// 					return a.length - b.length;
// 				})
// 			),
// 		].join('\n')
// 	);
// };

// solution(['but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours']);

// solution : 224ms -> solution2 : 200ms
const solution2 = (words) => {
	const set = new Set(words);
	const word = [...set];
	word.sort();
	console.log(word.sort((a, b) => a.length - b.length).join('\n'));
};

solution2(['but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours']);
