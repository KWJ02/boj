// 문제 : 돌 게임
// 돌을 1 or 3개를 가져갈 수 있고, 완벽하게 게임을 했다는 가정 하에 이기는 사람을 출력

const solution = (n) => {
	console.log(n % 2 === 0 ? 'CY' : 'SK');
};
