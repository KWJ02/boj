// 문제 : 크로아티아 알파벳
// 크로아티아 알파벳에 해당하는 문자를 1개의 단어로 취급, 입력된 문자열의 총 단어 길이

// const dict = {
// 	'c=': 2,
// 	'c-': 2,
// 	'dz=': 3,
// 	'd-': 2,
// 	'lj': 2,
// 	'nj': 2,
// 	's=': 2,
// 	'z=': 2,
// };

// const solution = (str) => {
// 	let count = 0;
// 	let jump = 1;
// 	for (i = 0; i < str.length; i += jump) {
// 		let word = str[i] + str[i + 1];
// 		if (!dict[word]) {
// 			word = str[i] + str[i + 1] + str[i + 2];
// 			if (!dict[word]) {
// 				jump = 1;
// 				count++;
// 			} else {
// 				jump = 3;
// 				count++;
// 			}
// 		} else {
// 			jump = 2;
// 			count++;
// 		}
// 	}

// 	return count;
// };

// console.log(solution('ljes=njak'));
// console.log(solution('ddz=z='));
// console.log(solution('nljj'));
// console.log(solution('c=c='));
// console.log(solution('dz=ak'));

// 개선된 버전
const solution = (str) => {
	const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

	for (a of alphabet) {
		str = str.replaceAll(a, '1');
	}

	return str.length;
};

console.log(solution('ljes=njak'));
console.log(solution('ddz=z='));
console.log(solution('nljj'));
console.log(solution('c=c='));
console.log(solution('dz=ak'));
