// 문제 : 소수의 연속합
// 주어진 입력의 수가 소수의 연속합이 될 수 있는 경우의 수 출력
// 투 포인터 : 구간의 합을 구할때 사용하는 알고리즘 (O) -> 슬라이딩 윈도우(st, en 고정)는 투 포인터의 특별한 형태
// 시작, 끝 인덱스 변수를 사용하여 구간을 변동시키며 타겟값을 찾는 알고리즘
// 구간의 합이 타겟값보다 크면 작은 값을 하나씩 빼고,
// 구간의 합이 타겟값보다 작으면 큰 값을 하나씩 넣는 방식

const solution = (num) => {
	// 짝수도 소수의 합으로 나타낼 수 있음. 짝수 배제 코드 제거
	// if (num % 2 === 0) {
	// 	console.log(0);
	// 	return;
	// }

	const isPrime = Array.from({ length: num + 1 }).fill(true);
	const prime = [];
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i < isPrime.length; i++) {
		if (isPrime[i] === false) continue;
		if (isPrime[i]) prime.push(i);
		for (let j = i * i; j < isPrime.length; j += i) {
			isPrime[j] = false;
		}
	}

	// dfs는 시간초과, 만든 소수 배열을 이용하여 투 포인터로 접근해야 함
	// const dfs = (sum, idx) => {
	// 	if (sum > num) return;

	// 	if (sum === num) {
	// 		cnt++;
	// 		return;
	// 	}

	// 	for (let i = idx; i < prime.length; i++) {
	// 		sum += prime[i];
	// 		dfs(sum, idx + 1);
	// 		sum -= prime[i];
	// 	}
	// };

	// dfs(0, 0);

	let st = 0;
	let en = 0;
	let cnt = 0;
	let sum = 0;

	while (true) {
		if (sum === num) cnt++;

		if (sum >= num) {
			sum -= prime[st++];
		} else if (en === prime.length) {
			break;
		} else {
			sum += prime[en++];
		}
	}

	console.log(cnt);
};

solution(3);

/**
 * 
    while (true) {
		if (sum === num) cnt++;
		if (sum >= num) sum -= prime[st++];
		if (en === prime.length) break;
		if (sum < num) sum += prime[en++];
	}

    투 포인터 방식은 배열 원소를 슬라이딩할 때,
    하나의 반복 작업 내 반드시 연관된 분기로 묶여야함.

    이렇게 독립된 분기로 작업하면,
    하나의 작업에 sum >= num과 sum < num 분기문이 동시에 작동할 수 있음.
    하나의 반복에 연관된 분기로 하나의 숫자에 대해 st나 en이 1개만 증가해야하는 것이 정상이지만,
    하나의 반복에 독립된 분기로 하나의 숫자에 대해 st와 en 전부 증가할 수 있기 때문에 버그가 발생할 수 있음

 */
