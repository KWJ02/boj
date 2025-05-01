// 문제 : 앞뒤로 똑같은 문자인지

const solution = (p) => {
	return [...p].reverse().join('') === p ? 1 : 0;
};

console.log(solution('level'));
console.log(solution('baekjoon'));
