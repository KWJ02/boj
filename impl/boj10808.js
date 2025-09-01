// 문제 : 알파벳 개수

const solution = (str) => {
	const alpha = Array(26).fill(0);
	for (let i = 0; i < str.length; i++) {
		alpha[str[i].charCodeAt() - 97] += 1;
	}
	console.log(alpha.join(' '));
};

solution('baekjoon');
