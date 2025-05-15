// 문제 : 창문 닫기
// N개의 창문과 N명의 사람이 있을 때, N번째 사람부터 N의 배수를 따라 창문이 열려있으면 닫고, 닫혀있으면 열기
// 마지막 사람이 행위를 끝낸 후, 열려있는 창문의 개수 출력

// 열리고 닫힌 횟수가 홀수인 숫자가 열려있는 창문
// 약수가 홀수인 수 => 완전제곱수들만 열려있을 것.
// 완전제곱수 : Math.floor(Math.sqrt(N))으로 개수 구하기 가능;
const solution = (N) => {
	console.log(Math.floor(Math.sqrt(N)));
};

solution(3);
solution(24);

// N의 입력이 최대 21억까지 들어오므로 이걸 배열로 저장한다는 것 자체가 메모리 낭비, 수학적으로 접근
// const badExample = (N) => {
// 	const window = Array(N + 1).fill(1);

// 	for (let i = 2; i <= N; i++) {
// 		for (let j = i; j <= N; j += i) {
// 			if (window[j] === 1) {
// 				window[j] = 0;
// 			} else {
// 				window[j] = 1;
// 			}
// 		}
// 	}

// 	console.log(window.filter((v, i) => v === 1 && i > 0).length);
// };
