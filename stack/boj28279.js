// 문제 : 덱 2
// 덱을 이용한 명령어 처리
// 덱은 일반 배열을 이용하면 무조건 시간초과 발생
/**
    front 포인터로 음수 인덱스를 관리해야하는데
    배열 상에서 음수 인덱스 정의는 되지만,
    a = []; a[-1] = 1 일 때,
    a.length = 0이 나오는 특징이 있음
    어차피 길이 판별은 back - front로 할 것이기 때문에
    배열, 객체 어떤 것을써도 상관없을듯
*/

const log = [];
let deq = {};
let front = 0;
let rear = 0;

const solution = (orders) => {
	const [order, num] = orders.split(' ');

	switch (order) {
		case '1':
			deq[--front] = num;
			break;
		case '2':
			deq[rear++] = num;
			break;
		case '3':
			rear - front > 0 ? log.push(deq[front++]) : log.push(-1);
			break;
		case '4':
			rear - front > 0 ? log.push(deq[--rear]) : log.push(-1);
			break;
		case '5':
			log.push(rear - front);
			break;
		case '6':
			rear - front === 0 ? log.push(1) : log.push(0);
			break;
		case '7':
			rear - front > 0 ? log.push(deq[front]) : log.push(-1);
			break;
		case '8':
			rear - front > 0 ? log.push(deq[rear - 1]) : log.push(-1);
			break;
	}
};

input = ['6', '1 3', '1 8', '7', '8', '3', '2 5', '1 2', '5', '4', '4'];

input.forEach((v) => {
	solution(v);
});
console.log(log.join('\n'));
