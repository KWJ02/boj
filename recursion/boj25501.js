// 문제 : 재귀의 귀재
// 팰린드롬 문제를 재귀로 구현

const result = [];
const solution = (str) => {
	let count = 0;

	const recursion = (str, s, e) => {
		count++;
		if (s >= e) return 1;
		if (str[s] !== str[e]) return 0;
		return recursion(str, s + 1, e - 1);
	};

	const isPalindrome = (str) => {
		return recursion(str, 0, str.length - 1);
	};

	result.push([isPalindrome(str), count]);
};

const input = ['AAA', 'ABBA', 'ABABA', 'ABCA', 'PALINDROME'];
input.forEach((v) => solution(v));
console.log(result.map((v) => v.join(' ')).join('\n'));
