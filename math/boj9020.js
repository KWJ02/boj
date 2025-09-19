// 문제 : 골드바흐의 추측

// const solution = (odds) => {
// 	const result = [];
// 	const set = new Set();
// 	const isPrime = (num) => {
// 		for (let i = 2; i <= Math.sqrt(num); i++) {
// 			if (num % i === 0) return false;
// 		}
// 		set.add(num);
// 		return true;
// 	};

// 	for (let i of odds) {
// 		const pos = [];
// 		for (let j = 2; j <= i / 2; j++) {
// 			if (set.has(j) && set.has(i - j)) {
// 				pos.push([j, i - j]);
// 			} else {
// 				if (isPrime(j) && isPrime(i - j)) {
// 					pos.push([j, i - j]);
// 				}
// 			}
// 		}
// 		result.push(pos[pos.length - 1].join(' '));
// 	}

// 	console.log(result.join('\n'));
// };

// 1076ms -> 268ms 시간 단축
const solution = (odds) => {
	const result = [];
	const maxCase = Math.max(...odds);
	const isPrime = Array.from({ length: maxCase }).fill(true);

	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i < Math.sqrt(maxCase); i++) {
		for (let j = i * i; j <= maxCase; j += i) {
			if (isPrime[j]) isPrime[j] = false;
		}
	}

	for (let o of odds) {
		const pos = [];
		for (let k = 2; k <= o / 2; k++) {
			if (isPrime[k] && isPrime[o - k]) pos.push(`${k} ${o - k}`);
		}
		result.push(pos[pos.length - 1]);
	}

	console.log(result.join('\n'));
};

solution([8, 10, 16]);
