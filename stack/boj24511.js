// 문제 : queuestack
// 큐와 스택의 조합으로 이루어진 임의의 가상 자료구조.
// 새로운 원소가 들어오면, 큐와 스택의 FIFO, LIFO 특성으로 같은 pop일지라도 서로 다른 방향으로 나오는 원소를 가리는 문제
// 2중 for문이 가장 직관적이나, 시간초과로 인해 문제의 구조를 이용하여 최적화가 필요

/**
    구조상 자료구조가 큐일때 insert의 요소와 바뀜
    insert의 길이가 주어질때, 큐에 존재하는 원소들을 뽑은 후 역순으로 돌리고,
    -> 0 0 0 0에 1 2 3 4가 있고, 5 6 7이 들어온다면, 5가 삽입되면 4가 마지막으로 나오고 (lifo 특성상 5 1 2 3),
    6이 삽입된다면 3이, 7이 삽입된다면 2가 나오므로
    4 3 2가 저장되어있어야함.
    이 구조를 가지고 역순으로 돌리는 직관적인 코드를 짜는거임

    이걸 2중 for문으로 구하지 않고 직관적으로 생각하면,
    큐의 위치와 큐에 저장되어있는 초기값을 확인하고,
    그들을 순회해서 역순으로 돌린 후, insert 길이의 기준으로 잘라야함
    원소들이 계속해서 삽입되면 큐에서도 원소들이 계속 바뀔테니까
    0,0,0,0 -> 1,2,3,4와 5,6,7일때, 큐의 배열은 1,2,3,4이고, 이들을 역순으로 돌리면 4,3,2,1.
    4,3,2,1을 5,6,7의 길이인 3만큼을 자르면 4,3,2가 출력됨.

    만약 0,0,0 -> 1,2,3이고 insert가 4,5,6,7,8,9라면,
    1,2,3을 역순으로 돌리고 3,2,1, insert를 concat해서 insert의 길이만큼 자르면 되는거임
    1 2 3 -> 초기
    4 1 2 -> 3
    5 4 1 -> 3 2
    6 5 4 -> 3 2 1
    7 6 5 -> 3 2 1 4
    8 7 6 -> 3 2 1 4 5 
    9 8 7 -> 3 2 1 4 5 6
    
    초기 num값이 모두 빠지고 나면, insert 순서대로 마지막 원소로 나오니
    concat을 해버리는거임
 */

/** */
const solution = (type, num, insert) => {
	const seq = [];

	for (let i = 0; i < type.length; i++) {
		if (type[i] === 0) {
			seq.push(num[i]);
		}
	}

	console.log(seq.reverse().concat(insert).slice(0, insert.length).join(' '));
};

solution([1, 1, 1, 1, 1], [1, 2, 3, 4, 5], [1, 3, 5]); // 4 1 2

// type -> 1억, insert -> 1억 => 2중for문일 경우 무조건 시간초과
const timeout = (type, num, insert) => {
	const seq = [];

	for (let i = 0; i < insert.length; i++) {
		let factor = insert[i];

		for (let j = 0; j < type.length; j++) {
			if (type[j] === 0) {
				// 큐일때
				let temp = factor;
				factor = num[j];
				num[j] = temp;
			}
		}
		seq.push(factor);
	}

	console.log(seq);
};
