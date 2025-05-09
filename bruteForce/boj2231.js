// 문제 : 분해합
// 245의 분해합은 256(245+2+4+5), 245은 256의 생성자. 분해합의 생성자 중 최솟값을 갖는 생성자 출력

// 시간 : 736ms
// const solution = (num) => {
// 	for (let i = 1; i <= num; i++) {
// 		const splSum = [...i.toString()].map(Number).reduce((a, c) => a + c, 0);
// 		if (i + splSum === num) return i;
// 	}
//  return 0; // 생성자가 없다면 0 출력
// };

// 시간 개선 736ms -> 244ms
const solution = (num) => {
	for (let i = 1; i <= num; i++) {
		let sum = i;
		const str = i.toString();
		for (let j = 0; j < str.length; j++) {
			sum += Number(str[j]);
		}
		if (sum === num) return i;
	}
	return 0;
};

console.log(solution(216));
