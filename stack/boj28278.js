// 문제 : 스택 2
// 주어진 명령에 따라 알맞은 출력값 반환

const solution = (orders) => {
	const arr = [];
	const log = [];
	for (let i = 0; i < orders.length; i++) {
		let order = null;
		let num = null;

		if (orders[i].length > 1) {
			[order, num] = orders[i].split(' ');
		} else {
			order = orders[i];
		}

		switch (order) {
			case '1':
				arr.push(num);
				break;
			case '2':
				if (arr.length > 0) {
					log.push(arr.pop());
				} else {
					log.push(-1);
				}
				break;
			case '3':
				log.push(arr.length);
				break;
			case '4':
				if (arr.length > 0) {
					log.push(0);
				} else {
					log.push(1);
				}
				break;
			case '5':
				if (arr.length > 0) {
					log.push(arr.at(-1));
				} else {
					log.push(-1);
				}
		}
	}

	console.log(log.join('\n'));
};

solution(['4', '1 3', '1 5', '3', '2', '5', '2', '2', '5']);

// orders의 입력 크기가 1000000 인데, for문에서 하나하나 콘솔찍는 행위는 시간을 너무많이 해먹음
// -> 출력문을 따로 배열에 모아놨다가 한꺼번에 출력하는게 시간을 훨씬 아낄 수 있음
// console.log -> process.stdout.write | console.log(Array.join('\n'))로 출력시간 단축 가능
// const timeout = (orders) => {
// 	const arr = [];
// 	for (let i = 0; i < orders.length; i++) {
// 		let order = null;
// 		let num = null;

// 		if (orders[i].length > 1) {
// 			[order, num] = orders[i].split(' ');
// 		} else {
// 			order = orders[i];
// 		}

// 		switch (order) {
// 			case '1':
// 				arr.push(num);
// 				break;
// 			case '2':
// 				if (arr.length > 0) {
// 					console.log(arr.pop());
// 				} else {
// 					console.log(-1);
// 				}
// 				break;
// 			case '3':
// 				console.log(arr.length);
// 				break;
// 			case '4':
// 				if (arr.length > 0) {
// 					console.log(0);
// 				} else {
// 					console.log(1);
// 				}
// 				break;
// 			case '5':
// 				if (arr.length > 0) {
// 					console.log(arr.at(-1));
// 				} else {
// 					console.log(-1);
// 				}
// 		}
// 	}
// };
