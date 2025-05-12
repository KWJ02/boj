// 문제 : 소트인사이드
// 자연수의 자릿수끼리 내림차순으로 정렬

const solution = (num) => {
	console.log([...num].sort((a, b) => b - a).join(''));
};

solution('2143');
